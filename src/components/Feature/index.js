import React, { useState } from 'react'
import {FeatureBtn, FeatureContainer} from './FeatureElements'
import firebase from "firebase";

async function getFeature() {
  const featureRef = firebase.firestore().collection("PlatDuJour").doc("wmrgzOaqhYkVD6ua2XXv")
  const doc = await featureRef.get();

  if (doc.exists) return doc.data();
}

const Feature = () => {
    const [feature, setFeature] = useState([]);

    if (feature.length === 0) {
      getFeature().then((data) => {
        setFeature(data);
      });
    }

    return (
        <FeatureContainer>
            <h1>{feature.nom}</h1>
            <p>{feature.description}</p>
            <FeatureBtn to="/reservation">Réserver une table</FeatureBtn>
        </FeatureContainer>
    )
}

export default Feature
