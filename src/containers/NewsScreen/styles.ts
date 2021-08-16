import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  score: {
    paddingRight: 20,
  },
  link: {
    color: 'blue',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  authorContainer: {
    flexDirection: 'row',
  },
  date: {
    opacity: 0.7,
  },
});
