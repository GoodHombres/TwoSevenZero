import colors from './../../utils/colors';

export const css = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  triviaContainer: {
    alignSelf: 'center',
    width: '90%',
    maxWidth: 500,
  },
  promptContainer: {
    padding: 20,
    marginTop: 20,
    borderRadius: 4,
    maxHeight: 250,
    backgroundColor: colors.light,
  },
  category: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
  },
  question: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  choicesContainer: {
    marginTop: 60,
  },
  choice: {
    padding: 20,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: colors.light,
  },
  choiceText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.background,
  },
};
