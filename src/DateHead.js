import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const DateHead = ({date}) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;

  return (
    <>
      <StatusBar backgroundColor="#1976d2" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#1976d2',
  },
  dateText: {
    fontSize: 24,
    color: '#ffffff',
  },
});

export default DateHead;
