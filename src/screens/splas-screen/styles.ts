import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },

  textContainer: {
    marginBottom: 12,   
  },

  buttonTextContainer: {
    marginTop: 37, 
    

  },
  headerText: {
    color: "#FFF",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 44, 
  },
  subHeaderTextContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  HeaderText: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 36, 
    opacity: 0.8,
  },

  subHeaderText: {
    color: "#FFF",          
    textAlign: "center",    
    fontSize: 16,           
    fontStyle: "normal",    
    fontWeight: "500",      
    lineHeight: 20,        
    opacity: 0.8,          
  },
  button: {
    width:'89%',
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FFF",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    // paddingHorizontal: 16,
  },
  
  
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default styles;
