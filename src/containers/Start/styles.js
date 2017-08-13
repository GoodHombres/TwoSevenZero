import colors from './../../utils/colors';

const css = {
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    width: '100%',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.background,
  },
  subtitle: {
    color: colors.lightgray,
    marginTop: 20,
    fontSize: 24,
  },
  content: {
    alignItems: 'center',
    maxWidth: 500,
    width: '90%',
    margin: 'auto',
  },
  instructions: {
    textAlign: 'left',
    fontSize: 18,
    width: '100%',
    marginTop: 40,
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.foreground,
  },
  partyContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  democratContainer: {
    borderColor: colors.democrat,
    borderWidth: 2,
    flex: 1,
  },
  republicanContainer: {
    borderColor: colors.republican,
    borderWidth: 2,
    flex: 1,
  },
  democratContainerFill: {
    backgroundColor: colors.democrat,
  },
  republicanContainerFill: {
    backgroundColor: colors.republican,
  },
  party: {
    color: colors.background,
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  democrat: {
    backgroundColor: colors.democrat,
  },
  republican: {
    backgroundColor: colors.republican,
  },
  partyDemocrat: { color: colors.democrat },
  partyRepublican: { color: colors.republican },
};

export default css;
