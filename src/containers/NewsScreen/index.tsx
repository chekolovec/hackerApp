import React, {useCallback} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Hyperlink from 'react-native-hyperlink';
import moment from 'moment';

import {getAuthors, getNewsItems} from '../../redux/news/selectors';

import styles from './styles';

export default () => {
  const newsItems = useSelector(getNewsItems);
  const authors = useSelector(getAuthors);

  const getTitle = useCallback(
    (text = '') => (text.length > 100 ? text.substring(0, 99) + '...' : text),
    [],
  );

  const renderNewsItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <Text>{item.title || getTitle(item.text)}</Text>
        {item.score && <Text style={styles.score}>score: {item.score}</Text>}
        {item.url && (
          <Hyperlink linkDefault={true} linkStyle={styles.link}>
            <Text>{item.url}</Text>
          </Hyperlink>
        )}
        <View style={styles.bottomContainer}>
          {item.time && (
            <Text style={styles.date}>
              {moment(item.time).format('DD.MM.YY HH:mm')}
            </Text>
          )}
          {authors[item.by] && (
            <View style={styles.authorContainer}>
              <Text>{authors[item.by]?.id}</Text>
              <Text> (karma: {authors[item.by]?.karma})</Text>
            </View>
          )}
        </View>
      </View>
    ),
    [authors, getTitle],
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={newsItems}
          renderItem={renderNewsItem}
        />
      </SafeAreaView>
    </View>
  );
};
