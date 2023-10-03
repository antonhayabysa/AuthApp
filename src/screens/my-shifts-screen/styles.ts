import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const cardWidth = windowWidth - 32; 

const styles = StyleSheet.create({
    containerShifts: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FFF',
    },
    containerTopShifts: {
        flex: 1, 
        alignItems: "center",
        width: '100%', 
        paddingHorizontal: 16, 
    },
    leftArrowContainerShifts: {
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
    loginButtonImageShifts: {
        width: 24,
        height: 24,
    },
    welcomeContainerShifts: {
        width: '100%',
    },
    welcomeTextShifts: {
        color: "#161616",
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 36,
        marginBottom: 8, 
    },
    formContainer: {
        width: '100%',
        padding: 10,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        borderColor: '#ECEEEF',
        borderWidth: 2,
        flexDirection: 'row', 
        marginBottom: 20, 
    },
    formText: {
        fontSize: 16,
        color: "#2E2E2E",
        lineHeight: 20,
    },
    formImage: {
        width: 12,
        height: 7,
    },
    cardContainer: {
        flexDirection: 'column', 
        marginBottom: 16,
    },
    card: {
        width: cardWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 16,
        borderRadius: 12,
        borderColor: 'rgba(134, 139, 153, 0.14)',
        borderWidth: 2,
    },
    rightIcon: {
        width: 28,
        height: 28,
    },
    dateText: {
        fontSize: 18,
        color: "#868B99",
        fontWeight: "bold",  
        marginBottom: 6,     
    },
    addressText: {
        fontSize: 18,
        color: "#161616",
        fontWeight: "bold",
    },
    timeText: {
        fontSize: 16,
        color: "#2E2E2E",
    },
    statusText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    completedText: {
        color: "#161616",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 20,
    },
    noShiftsContainer: {
        marginBottom: 44,
    },
    noShiftsText: {
        color: '#88919B',
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: 20,
        fontWeight: '400',
    },
});

export default styles;
