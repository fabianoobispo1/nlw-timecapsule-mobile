import { Link } from 'expo-router'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from '@expo/vector-icons/Feather'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
export default function Memories() {
  const { bottom, top } = useSafeAreaInsets()
  return (
    <View
      className="flex-1 px-8"
      style={{ paddingBottom: bottom, marginTop: top }}
      /*    contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
       */
    >
      <View className="mt-4 flex-row items-center justify-between">
        <NLWLogo />

        <Link href="/new" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
