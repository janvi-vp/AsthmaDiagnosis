import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DataTable } from "react-native-paper";
import { useSelector } from 'react-redux';


import { ScreenTemplate } from "../components/ScreenTemplate";
import { CustomCard } from "../components/Container";
import { CustomSubTitle, CustomOverline } from "../components/Text";
import { symptomsSubmit } from "../actions/infoActions";
import { CustomButton } from '../components/Button';


const getSym = props => {
    const symList = useSelector(state => state.ini_symptoms);
    // let symList = symptomsSubmit.values;
    alert(symList);
}

class Diagnosis extends Component {
    static propTypes = {
        tests: PropTypes.object,
        symptoms: PropTypes.object,
        personal: PropTypes.object,
    }
    render() {

        
        // const { tests, symptoms, personal } = this.props;
        return(
            <ScreenTemplate>
                {/* <Title text={personal.name + " " + personal.age + " " + personal.gender} /> */}
                <CustomSubTitle text="Summary" />
                <CustomCard>
                    <CustomOverline text="Symptoms:" />
                    {/* <Text style={{ fontSize: 14, margin: 6, fontWeight: 'bold', }}>Wheezing: {symptoms.wheezing} Shortness of breath: {symptoms.shortness_of_breath}</Text>
                    <Text style={{ fontSize: 14, margin: 6, fontWeight: 'bold', }}>Cough: {symptoms.cough} Chest Tightness: {symptoms.chest_tightness}</Text>
                    <Text style={{ fontSize: 14, margin: 6, fontWeight: 'bold', }}>Night-time Awakening: {symptoms.nighttime} Restriction of activity: {symptoms.restriction}</Text> */}
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Symptom</DataTable.Title>
                            <DataTable.Title>Occurence</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell></DataTable.Cell>
                            <DataTable.Cell>0</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Shortness of breath</DataTable.Cell>
                            <DataTable.Cell>1</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Cough</DataTable.Cell>
                            <DataTable.Cell>1</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Chest Tightness</DataTable.Cell>
                            <DataTable.Cell>0</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Night-time Awakening</DataTable.Cell>
                            <DataTable.Cell>2</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Restriction of activity</DataTable.Cell>
                            <DataTable.Cell>1</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    <CustomOverline text="Spirometry:" />
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Label</DataTable.Title>
                            <DataTable.Title>Pre-Bronchodilator</DataTable.Title>
                            <DataTable.Title>Post-Bronchodilator</DataTable.Title>
                        </DataTable.Header>
                        <DataTable.Row>
                            <DataTable.Cell>FEV1</DataTable.Cell>
                            <DataTable.Cell>5</DataTable.Cell>
                            <DataTable.Cell>4</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>FEV1/FVC</DataTable.Cell>
                            <DataTable.Cell>2</DataTable.Cell>
                            <DataTable.Cell>3</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                </CustomCard>
                <CustomSubTitle text="Diagnosis" />
                <CustomCard>
                    <CustomButton text="Try" onPress = {getSym} />
                    <CustomOverline text="After analysing the entered details with the help of GINA Guidelines, the following diagnosis can be made:" />
                    <CustomOverline text="The patient should be diagnosed for Mild Persistent Asthma" />
                </CustomCard>
            </ScreenTemplate>
        )
    }
}

/* const mapStateToProps = (state) => {
    const tests = state.infoReducer.tests || "";
    const symptoms = state.infoReducer.ini_symptoms || "";
    const personal = state.infoReducer.personal || "";
    return {
        tests,
        symptoms,
        personal,
    };
}; */

export default Diagnosis;