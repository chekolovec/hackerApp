import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {getRandomItems} from '../../helpers';
import {fetchAuthors, fetchNews, fetchNewsById} from '../../redux/news/actions';
import {
  getNewsIds,
  getNewsItems,
  getIsLoading,
} from '../../redux/news/selectors';
import {RootStackParamList} from '../../navigation';

import styles from './styles';

type NewsScreenProp = StackNavigationProp<RootStackParamList>;

export default () => {
  const dispatch = useDispatch();
  const newsIds = useSelector(getNewsIds);
  const newsItems = useSelector(getNewsItems);
  const isLoading = useSelector(getIsLoading);
  const navigation = useNavigation<NewsScreenProp>();

  useEffect(() => {
    dispatch(fetchNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!newsIds.length) {
      return;
    }
    const nums = getRandomItems(newsIds, 10);
    dispatch(fetchNewsById(nums));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsIds]);

  useEffect(() => {
    if (!newsItems.length) {
      return;
    }
    const authorIds = newsItems.map(({by}) => by);
    dispatch(fetchAuthors(authorIds));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsItems]);

  useEffect(() => {
    if (!isLoading) {
      navigation.replace('NewsScreen');
    }
  }, [isLoading, navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};
