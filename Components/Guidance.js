import React from 'react';
import {ImageBackground, SafeAreaView, Text, StyleSheet, View, ScrollView } from 'react-native';


function Guidance(props) {
    return (
        <ScrollView>
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            TAX BANDS
            {'\n'}
            Zesco Residential Bands is set as Follows
          </Text>
          <Text style={styles.paragraph}>
          <Text style={{fontWeight:'bold'}}>R1 BAND</Text>
           {'\n'}
           If you buy power for instance for the first time in the month, you will buy at a lower tariff than the second time that
            you buy power within the same month. For instance, if you buy power today for the first time in this month, you will buy
            it at 47 ngwee per unit, that is the first 100 units and that 47 ngwe is exclusive of taxes like the VAT
            and the excise duty The first Band is called the R1 Band. So if you add VAT and excise duty you will be buying at 56 ngwee per unit, the first 100 units.
            If you deplete those units within the same month and then within the month you buy the next units, you will be buying them 
            in another band at another cost. This band is called the R2 Band.
           </Text>
           
           <Text style={styles.paragraph}> 
           <Text style={{fontWeight:'bold'}}>R2 BAND</Text>
           {'\n'}
             In this Band you will be buying your
            units at 85 ngwee per unit, that is the next 101 to 300 units, but that’s exclusive of tax, if you add tax it will come 
            to K1.1. And if you buy for a third time within the month you will now go to the R3 tariff Band.
            </Text>
            
            <Text style={styles.paragraph}>
            <Text style={{fontWeight:'bold'}}>R3 BAND</Text>
           {'\n'}
                 So in that tariff, from 
            301 plus units, you will be buying at K1.54 per unit so that’s again exclusive of tax, if you include the taxes it
            will go to about K2.31 per unit.
            
          </Text>
          
        </View>
      </SafeAreaView>
      </ScrollView>
    );
}

export default Guidance;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 30,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 14,
      textAlign: 'center',
    },
  });