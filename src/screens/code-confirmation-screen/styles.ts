import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFF',
  },

  containerTop:{
    flex: 1, 
    alignItems: "center",
    width: '100%', 
    paddingHorizontal: 16, 
  },

  codeInputContainer:{
    width: '100%',
  },

  enterCodeText:{
    color: "#161616",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 36,
    marginBottom: 8, 
  },

  leftArrowContainer:{
    alignSelf: "flex-start",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 40,
    shadowColor: "#252D73",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 20, 
    marginTop: 8, 
  },

  loginButtonImage: {
    width: 24,
    height: 24,
  },

  welcomeContainer: {
    width: '100%',
  },

  welcomeText: {
    color: "#161616",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 36,
    marginBottom: 8, 
  },

  enterPhoneNumberContainer: {
    alignItems: 'flex-start',
  },
  
  enterPhoneNumberText: {
    color: "#868B99",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 24,
  },
  
  codeContainer: {
    width: '100%', 
    borderRadius: 12,
    backgroundColor: "#EDEDF4",
    paddingHorizontal: 24,
    marginTop: 20,
  },

  codeInput:{
    color: "#161616",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 24,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 4,
    height: 58,
  },

  codeInputError: {
    borderWidth: 1,
    borderColor: "#E93963",
},
  
errorText: {
  color: "#E93963",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: 18,
},
  
  phoneInput: {
    color: "#161616",
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 24,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 4,
    height: 58,
  },

  submitButtonDefault: {
    width: '100%', 
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#AFC0ED",
    marginTop: 16,
  },
  
  submitButtonActive: {
    width: '100%', 
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#0C4DCD",
    marginTop: 16,
  },
  
  submitButtonText: {
    color:'#fff',
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  resendButtonContainer: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 6,
},

  resendCodeText: {
    color: '#161616',
    fontFamily: 'Lato',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 16,
},
});

export default styles;

