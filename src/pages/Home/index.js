import React, { useState } from 'react'
import {
    ScrollView,
    View,
    TouchableOpacity,
} from 'react-native';
import {
    TitleText,
    RoundedButton,
    CountryCard,
    PlanCardItem,
    TabbarMenu,
} from '../../components';
import { defaultPadding } from '../../utils/theme';

const listCountries = [
    {
        name: "Austria",
        image: "https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg",
        dateTrip: "Jul 5 - Jul 21"
    },
    {
        name: "Japan",
        image: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        dateTrip: "Jul 5 - Jul 21"
    },
    {
        name: "Indonesia",
        image: "https://images.pexels.com/photos/2412711/pexels-photo-2412711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        dateTrip: "Jul 5 - Jul 21"
    },
]
const planListItems = [
    {
        dateTrip: "Jul 5 - Jul 21",
        cityName: "Kyoto",
        cityImage: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        placeName: "Kyoto Hotel",
        placeAddress: "Lorem ipsum dolor",
        placePhone: "+62 17263817236"
    },
    {
        dateTrip: "Aug 5 - Aug 21",
        cityName: "Wina",
        cityImage: "https://cdn.pixabay.com/photo/2020/03/08/17/09/belvedere-4913058_960_720.jpg",
        placeName: "Wina Hotel",
        placeAddress: "Lorem ipsum dolor",
        placePhone: "+62 17263817236"
    },
    {
        dateTrip: "Sep 5 - Sep 21",
        cityName: "Bali",
        cityImage: "https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980_960_720.jpg",
        placeName: "Bali Hotel",
        placeAddress: "Lorem ipsum dolor",
        placePhone: "+62 17263817236"
    },
]
const menuTab = [
    'Active',
    'Upcoming',
    'Past'
]
const Home = ({ navigation }) => {
    // SAVE INDEX INDEX MENU TAB
    const [indexTab, setIndexTab] = useState(0);
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
            }}>
            {/* TITLE AND SEARCH BUTTON */}
            <View style={{
                paddingHorizontal: defaultPadding,
                marginTop: 48,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }} >
                <TitleText text="My Trips" />
                <RoundedButton icon="search" />
            </View>

            {/* TAB BUTTON */}
            <ScrollView horizontal={true}
                style={{
                    marginTop: defaultPadding,
                    paddingHorizontal: defaultPadding,
                    height: 40,
                }}>
                {
                    menuTab.map((menu, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => setIndexTab(index)}>
                                <TabbarMenu textMenu={menu} isSelectedMenu={index === indexTab} />
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

            {/* COUNTRY CARD */}
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                    marginTop: defaultPadding / 2,
                    height: 200
                }}>
                {
                    listCountries.map((country, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    marginStart: (index === 0) ? defaultPadding : 0,
                                    marginEnd: defaultPadding
                                }}>
                                <CountryCard countryName={country.name} dateTrip={country.dateTrip} countryImage={country.image} />
                            </View>
                        )
                    })
                }
            </ScrollView>

            {/* PLAN LIST */}
            <View style={{
                margin: defaultPadding,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }} >
                <TitleText text="Plan" />
                <RoundedButton icon="payment" />
            </View>

            <View style={{
                marginHorizontal: defaultPadding,
            }}>
                {
                    planListItems.map((item, index) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Plan', { ...item })}
                                key={index}>
                                <PlanCardItem
                                    planData={item} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            {/* BOTTOM NAVBAR */}
            {/* <BottomNavigationBar /> */}


        </ScrollView>
    )
}

export default Home
