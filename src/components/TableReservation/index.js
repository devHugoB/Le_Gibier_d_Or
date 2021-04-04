import React, { useState, useEffect } from "react";
import {motion} from "framer-motion";
import {openY, Shining} from "../../animations";
import firebase from '../../firebase';

import {
  ReservationFormContainer,
  ReservationFormContent,
  ReservationFormContentLeft,
  ReservationFormContentRight,
  Icon,
  CloseIcon,
  ReservationFormItems,
  ReservationFormInput,
  ReservationFormPhoneContent,
  ReservationFormLabel,
  ReservationFormOptions,
  ReservationFormOptionsItem,
  ReservationFormInputBtn,
  ReservationFormFooterMessage
} from './ReservationFormElements.js'

import {
  TablesListContainer,
  TablesListHeading,
  TablesListSortContent,
  TablesListSortLabel,
  TablesListSortOptions,
  TablesListSortOptionsItem,
  TablesListWrapper,
  TablesListCard,
  TablesListInfo,
  TablesListImg,
  TablesListTitle,
  TablesListP,
  TablesListHourly,
  TablesListHourlyItem,
  TablesListHourlyItemLabel,
  TablesListBtn
} from './TablesListElements';
import Img2 from '../../images/places-2.jpg';
import Img4 from '../../images/places-4.jpg';
import Img6 from '../../images/places-6.jpg';
import Img8 from '../../images/places-8.jpg';

const SORT_OPTIONS = {
  'PLACES_ASC': {column: 'places', direction:'asc'},
  'PLACES_DESC': {column: 'places', direction:'desc'},

  'HEURE_ASC': {column: 'reservation', direction:'asc'},
  'HEURE_DESC': {column: 'reservation', direction:'desc'}
}

function useTables(sortBy = 'PLACES_ASC') {
  const [tables, setTables] = useState([])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('tables')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newTables = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setTables(newTables)
      })

    return () => unsubscribe()
  }, [sortBy])

  return tables;
}

const TableReservation = () => {
  const [sortBy, setSortBy] = useState('PLACES_ASC')
  const tables = useTables(sortBy)

  const [wantReserved, setWantReserved] = useState(false);
  const [nom, setNom] = useState('')
  const [heure, setHeure] = useState(7)
  const [tel, setTel] = useState('')
  const [table, setTable] = useState({
    id:  null,
    data: {
      places: null,
      reservation: null
    }
  })


  const isPhone = () => {
    let mail = document.getElementById('not-phone');
    let format = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

    if (tel.match(format)) {
      mail.style.display = 'none';
      return true
    } else {
      mail.style.display = 'block';
      mail.style.animation = 'dongle 1s';
      setTimeout(() => {
        mail.style.animation = 'none';
      }, 1001);
      return false;
    }
  }

  const invalidInfos = () => {
    let footerMessage = document.querySelector(ReservationFormFooterMessage);

    footerMessage.innerHTML = 'Merci de remplir tous les champs requis (*) !';
    footerMessage.style.opacity = '1';
    footerMessage.style.background = 'rgb(252,89,89)';

    if (!nom) document.getElementById('nom').style.border = '2px solid rgb(252,89,89)';
    if (!tel) document.getElementById('phone').style.border = '2px solid rgb(252,89,89)';
    if (heure === 7) document.getElementById('heure').style.border = '2px solid rgb(252,89,89)';
  };

  const successInfos = () => {
    let footerMessage = document.querySelector(ReservationFormFooterMessage);

    footerMessage.innerHTML = 'Votre réservation a été réalisé avec succès !'
    footerMessage.style.opacity = '1';
    footerMessage.style.background = 'rgb(89,252,89)';

    document.getElementById('nom')
      .style.border = '0 0 1px 0 solid rgba(255,200,0,8)';

    document.getElementById('phone')
      .style.border = '0 0 1px 0 solid rgba(255,200,0,8)';

    document.getElementById('heure')
      .style.border = '0 0 1px 0 solid rgba(255,200,0,8)';

    setTimeout(() => {
      footerMessage.style.opacity = '0';
      setWantReserved(false)
    }, 10000);
  };

  function onSubmitReservation(e) {
    e.preventDefault();

    if (nom && tel && isPhone()) {
      firebase
        .firestore()
        .collection('reservations')
        .add({
          heure: parseInt(heure),
          idTable: table.id,
          nom: nom,
          place: table.data.places,
          tel: tel
        }).then(() => {
        table.data.reservation[heure] = true
        console.log('Nouvelle reservation : ' + table.data.reservation)
        firebase
          .firestore()
          .collection('tables')
          .doc(table.id)
          .update({
            reservation: table.data.reservation
          }).then(() => {
          successInfos()
          setNom('')
          setHeure(7)
          setTel('')
          setTable({
            id: table.id,
            data: {
              places: table.data.places,
              reservation: table.data.reservation
            }
          })
        })
      })
    } else {
      invalidInfos();
    }
  }

  function onSubmit(id, places, reservation){
    setTable({
      id: id,
      data: {
        places: places,
        reservation: reservation
      }
    })
    setWantReserved(true)
  }

  function howManySeats(places) {
    if (places === 2) return Img2;
    else if (places === 4) return Img4;
    else if (places === 6) return Img6;
    else if (places === 8) return Img8;
  }

  function showReservationForm() {
    return(
      <ReservationFormContainer key={table.id}>
        <Icon onClick={() => setWantReserved(false)}>
          <CloseIcon />
        </Icon>
        <ReservationFormContent>
          <ReservationFormContentLeft>
            <TablesListCard>
              <TablesListInfo>
                <TablesListImg src={howManySeats(table.data.places)} />
                <TablesListTitle>{table.data.places} personnes</TablesListTitle>
                <TablesListP>Disponibilité :</TablesListP>
                <TablesListHourly>
                  <TablesListHourlyItem>
                    12h00 - 13h30 :
                    <TablesListHourlyItemLabel isDispo={table.data.reservation[0]}>
                      {table.data.reservation[0] ? ' réservée' : ' disponnible'}
                    </TablesListHourlyItemLabel>
                  </TablesListHourlyItem>
                  <TablesListHourlyItem>
                    13h30 - 15h00 :
                    <TablesListHourlyItemLabel isDispo={table.data.reservation[1]}>
                      {table.data.reservation[1] ? ' réservée' : ' disponnible'}
                    </TablesListHourlyItemLabel>
                  </TablesListHourlyItem>
                  <TablesListHourlyItem>
                    15h00 - 16h30 :
                    <TablesListHourlyItemLabel isDispo={table.data.reservation[2]}>
                      {table.data.reservation[2] ? ' réservée' : ' disponnible'}
                    </TablesListHourlyItemLabel>
                  </TablesListHourlyItem>
                  <TablesListHourlyItem>
                    18h30 - 20h00 :
                    <TablesListHourlyItemLabel isDispo={table.data.reservation[3]}>
                      {table.data.reservation[3] ? ' réservée' : ' disponnible'}
                    </TablesListHourlyItemLabel>
                  </TablesListHourlyItem>
                  <TablesListHourlyItem>
                    20h00 - 21h30 :
                    <TablesListHourlyItemLabel isDispo={table.data.reservation[4]}>
                      {table.data.reservation[4] ? ' réservée' : ' disponnible'}
                    </TablesListHourlyItemLabel>
                  </TablesListHourlyItem>
                  <TablesListHourlyItem>
                    21h30 - 23h00 :
                    <TablesListHourlyItemLabel isDispo={table.data.reservation[5]}>
                      {table.data.reservation[5] ? ' réservée' : ' disponnible'}
                    </TablesListHourlyItemLabel>
                  </TablesListHourlyItem>
                  <TablesListHourlyItem>
                    23h00 - 00h30 :
                    <TablesListHourlyItemLabel isDispo={table.data.reservation[6]}>
                      {table.data.reservation[6] ? ' réservée' : ' disponnible'}
                    </TablesListHourlyItemLabel>
                  </TablesListHourlyItem>
                </TablesListHourly>
              </TablesListInfo>
            </TablesListCard>
          </ReservationFormContentLeft>
          <ReservationFormContentRight>
            <ReservationFormItems>
              <ReservationFormInput
                type="text"
                id="nom"
                name="nom"
                onChange={(e) => setNom(e.target.value)}
                placeholder="Nom *"
                value={nom}
                autoComplete="off"
              />
              <ReservationFormPhoneContent className="phone-content">
                <ReservationFormLabel id="not-phone">Téléphone non valide</ReservationFormLabel>
                <ReservationFormInput
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={(e) => setTel(e.target.value)}
                  placeholder="Numéro de téléphone *"
                  value={tel}
                  autoComplete="on"
                />
                <ReservationFormLabel>Heure * :</ReservationFormLabel>{' '}
                <ReservationFormOptions id="heure" value={heure} onChange={e => setHeure(e.currentTarget.value)}>
                  <ReservationFormOptionsItem selected hidden>Choisissez votre horaire *</ReservationFormOptionsItem>
                  <ReservationFormOptionsItem value={0} disabled={table.data.reservation[0]}>
                    12h00 - 13h30
                  </ReservationFormOptionsItem>
                  <ReservationFormOptionsItem value={1} disabled={table.data.reservation[1]}>
                    13h30 - 15h00
                  </ReservationFormOptionsItem>
                  <ReservationFormOptionsItem value={2} disabled={table.data.reservation[2]}>
                    15h00 - 16h30
                  </ReservationFormOptionsItem>
                  <ReservationFormOptionsItem value={3} disabled={table.data.reservation[3]}>
                    18h30 - 20h00
                  </ReservationFormOptionsItem>
                  <ReservationFormOptionsItem value={4} disabled={table.data.reservation[4]}>
                    20h00 - 21h30
                  </ReservationFormOptionsItem>
                  <ReservationFormOptionsItem value={5} disabled={table.data.reservation[5]}>
                    21h30 - 23h00
                  </ReservationFormOptionsItem>
                  <ReservationFormOptionsItem value={6} disabled={table.data.reservation[6]}>
                    23h00 - 00h30
                  </ReservationFormOptionsItem>
                </ReservationFormOptions>
              </ReservationFormPhoneContent>
            </ReservationFormItems>
            <ReservationFormInputBtn
              type="button"
              value="submit"
              onClick={onSubmitReservation}
            >
              CONFIRMER
            </ReservationFormInputBtn>
            <ReservationFormFooterMessage />
          </ReservationFormContentRight>
        </ReservationFormContent>
      </ReservationFormContainer>
    )
  }

  function showTablesList() {
    return(
      <TablesListContainer>
        <TablesListHeading>Listes des tables</TablesListHeading>
        <TablesListSortContent>
          <TablesListSortLabel>Trier par :</TablesListSortLabel>{' '}
          <TablesListSortOptions value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
            <TablesListSortOptionsItem value='PLACES_ASC'>Places (croissant)</TablesListSortOptionsItem>
            <TablesListSortOptionsItem value='PLACES_DESC'>Places (décroissant)</TablesListSortOptionsItem>
            <TablesListSortOptionsItem disabled>-----</TablesListSortOptionsItem>
            <TablesListSortOptionsItem value='HEURE_ASC'>heures (croissante)</TablesListSortOptionsItem>
            <TablesListSortOptionsItem value='HEURE_DESC'>heures (décroissante)</TablesListSortOptionsItem>
          </TablesListSortOptions>
        </TablesListSortContent>
        <TablesListWrapper>
          {tables.map((table) =>
            <motion.div
              whileHover='in'
              whileTap='out'
              variants={Shining}
            >
              <TablesListCard key={table.id}>
                <TablesListInfo>
                  <TablesListImg src={howManySeats(table.places)} />
                  <TablesListTitle>{table.places} personnes</TablesListTitle>
                  <TablesListP>Disponibilité :</TablesListP>
                  <TablesListHourly>
                    <TablesListHourlyItem>
                      12h00 - 13h30 :
                      <TablesListHourlyItemLabel isDispo={table.reservation[0]}>
                        {table.reservation[0] ? ' réservée' : ' disponnible'}
                      </TablesListHourlyItemLabel>
                    </TablesListHourlyItem>
                    <TablesListHourlyItem>
                      13h30 - 15h00 :
                      <TablesListHourlyItemLabel isDispo={table.reservation[1]}>
                        {table.reservation[1] ? ' réservée' : ' disponnible'}
                      </TablesListHourlyItemLabel>
                    </TablesListHourlyItem>
                    <TablesListHourlyItem>
                      15h00 - 16h30 :
                      <TablesListHourlyItemLabel isDispo={table.reservation[2]}>
                        {table.reservation[2] ? ' réservée' : ' disponnible'}
                      </TablesListHourlyItemLabel>
                    </TablesListHourlyItem>
                    <TablesListHourlyItem>
                      18h30 - 20h00 :
                      <TablesListHourlyItemLabel isDispo={table.reservation[3]}>
                        {table.reservation[3] ? ' réservée' : ' disponnible'}
                      </TablesListHourlyItemLabel>
                    </TablesListHourlyItem>
                    <TablesListHourlyItem>
                      20h00 - 21h30 :
                      <TablesListHourlyItemLabel isDispo={table.reservation[4]}>
                        {table.reservation[4] ? ' réservée' : ' disponnible'}
                      </TablesListHourlyItemLabel>
                    </TablesListHourlyItem>
                    <TablesListHourlyItem>
                      21h30 - 23h00 :
                      <TablesListHourlyItemLabel isDispo={table.reservation[5]}>
                        {table.reservation[5] ? ' réservée' : ' disponnible'}
                      </TablesListHourlyItemLabel>
                    </TablesListHourlyItem>
                    <TablesListHourlyItem>
                      23h00 - 00h30 :
                      <TablesListHourlyItemLabel isDispo={table.reservation[6]}>
                        {table.reservation[6] ? ' réservée' : ' disponnible'}
                      </TablesListHourlyItemLabel>
                    </TablesListHourlyItem>
                  </TablesListHourly>
                  <TablesListBtn
                    type="button"
                    value="submit"
                    onClick={() => onSubmit(table.id, table.places, table.reservation)}
                  >
                    RESERVER
                  </TablesListBtn>
                </TablesListInfo>
              </TablesListCard>
            </motion.div>
          )}
        </TablesListWrapper>
      </TablesListContainer>
    )
  }

  return(
    <div style={{minHeight: '100vh', maxHeight: '100%'}}>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={openY}
        transition={{duration: 1}}
      >
        {wantReserved ? (
          showReservationForm()
        ) : (
          showTablesList()
        )}
      </motion.div>
    </div>
  )
}

export default TableReservation