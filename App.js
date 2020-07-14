import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './src/en.json'
import de from './src/de.json'
import fr from './src/fr.json'

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en,
  de,
  fr
};

// Set default language if doesn't exists current lang
i18n.defaultLocale = 'fr'
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default function App() {
  return (
    <View style={styles.block}>
    <Text>
      {i18n.t('welcome')} {i18n.t('name')}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})