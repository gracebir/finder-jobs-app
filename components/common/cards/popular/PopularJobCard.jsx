import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedjob, handleCardPress}) => {
  return (
    <TouchableOpacity 
    style={styles.container(selectedjob, item)} 
    onPress={()=> handleCardPress(item) }>
      <TouchableOpacity style={styles.logoContainer(selectedjob, item)}>
        <Image
        source={{ uri: item.employer_logo}}
        style={styles.logoImage}
         />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedjob, item)} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard