import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Bookmark = () => {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <Text className='text-white'>This bookmark</Text>
    </SafeAreaView>
  )
}

export default Bookmark