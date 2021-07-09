import React from 'react'
import { StyleSheet, Image, Text, View, Dimensions, ImageBackground, ScrollView } from 'react-native'
import { defaultBackground, defaultPadding, blueColor, btnColor } from '../../utils/theme';
import { RoundedButton, TitleText, SubtitleText, Avatar, EntertainmentCard, PrimaryButton } from '../../components';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const friendsList = [
    { imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50' },
    { imageUrl: 'https://randomuser.me/api/portraits/men/36.jpg' },
    { imageUrl: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg' },
    { imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50' },
    { imageUrl: 'https://randomuser.me/api/portraits/men/36.jpg' },
    { imageUrl: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg' },
    { imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50' },
    { imageUrl: 'https://randomuser.me/api/portraits/men/36.jpg' },
    { imageUrl: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg' },
]

const entertainmentsList = [
    { text: "Trekking", imageUrl: 'https://cdn.pixabay.com/photo/2018/02/17/22/15/water-3161063_960_720.jpg' },
    { text: "Cableway", imageUrl: 'https://cdn.pixabay.com/photo/2017/06/24/02/08/mountains-2436512_960_720.jpg' },
    { text: "Hiking", imageUrl: 'https://cdn.pixabay.com/photo/2015/06/08/15/29/mountain-climbing-802099_960_720.jpg' },
    { text: "Canoeing", imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/17/46/canoeing-1149886_960_720.jpg' },

]

const Plan = ({ navigation, route }) => {

    const {
        dateTrip,
        cityName,
        cityImage } = route.params

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flexDirection: 'column',
                height: windowHeight,
            }}>
            <ImageBackground
                style={{
                    height: windowHeight / 2,
                    justifyContent: 'flex-end',
                    position: 'relative'
                }}
                source={{ uri: cityImage }}>

                {/* DARK OPACITY FOREGROUND IMAGE */}
                <View style={{
                    width: windowWidth,
                    height: windowHeight,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                </View>

                {/* 3 BTN DETAIL */}
                <View style={{
                    paddingHorizontal: defaultPadding,
                    paddingBottom: defaultPadding / 2,
                    flexDirection: 'row',
                    bottom: 20,
                    position: 'absolute'
                }}>
                    <RoundedButton style={{ marginEnd: 10 }} icon='info' bgColor={blueColor} />
                    <RoundedButton style={{ marginHorizontal: 10 }} icon='weekend' bgColor={blueColor} />
                    <RoundedButton style={{ marginHorizontal: 10 }} icon='flight' bgColor={blueColor} />
                </View>

                {/* Border Bottomsheet */}
                <View style={{
                    height: 20,
                    backgroundColor: defaultBackground,
                    borderTopStartRadius: 30,
                    borderTopEndRadius: 30,
                    bottom: 0,
                }} />

                <View style={{
                    position: 'absolute',
                    top: 0,
                    padding: defaultPadding,
                    width: windowWidth,
                    height: windowHeight,
                }}>
                    {/* Back Button */}
                    <View style={{
                        width: 36,
                        height: 36
                    }}>
                        <RoundedButton onPress={() => navigation.goBack()} icon='arrow-back' bgColor={blueColor} />
                    </View>
                    {/* Date text */}
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                        top: 40,
                    }}>{dateTrip}</Text>
                    {/* City text */}
                    <Text style={{
                        color: 'white',
                        fontSize: 48,
                        fontWeight: 'bold',
                        top: 40,
                    }}>{cityName}</Text>

                </View>
            </ImageBackground>
            {/* FRIENDS SECTION */}
            <View
                style={{
                    backgroundColor: defaultBackground,
                }}>
                <View style={{
                    paddingHorizontal: defaultPadding,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <SubtitleText text="Friends" />
                    <RoundedButton />
                </View>

                {/* HORIZONTAL AVATAR SECTION */}
                <View style={{ marginTop: 10 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginStart: defaultPadding }}>
                        {
                            friendsList.map((friend, index) => {
                                return (
                                    <View key={index} style={{
                                        marginStart: (index !== 0) ? defaultPadding / 2 : 0,
                                        marginEnd: (index === friendsList.length - 1) ? defaultPadding : 0
                                    }}>
                                        <Avatar image={friend.imageUrl} />
                                    </View>)
                            })
                        }
                    </ScrollView>
                </View>
            </View>
            {/* END FRIENDS SECTION */}

            {/* ENTERTAINMENTS SECTION */}
            <View
                style={{
                    backgroundColor: defaultBackground,
                    paddingVertical: defaultPadding,
                }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: defaultPadding
                }}>
                    <SubtitleText text="Entertainments" />
                    <RoundedButton />
                </View>

                {/* HORIZONTAL ENTERTAINMENTS CARD SECTION */}
                <View style={{ marginTop: 10 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {
                            entertainmentsList.map((entertainment, index) => {
                                return (
                                    <View key={index}
                                        style={{
                                            marginStart: (index === 0) ? defaultPadding : defaultPadding / 2,
                                            marginEnd: (index === entertainmentsList.length - 1) ? defaultPadding : 0
                                        }}>
                                        <EntertainmentCard text={entertainment.text} image={entertainment.imageUrl} />
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
            {/* END ENTERTAINMENTS SECTION */}

            {/* BUDGETS SECTION */}
            <View
                style={{
                    backgroundColor: defaultBackground,
                    paddingHorizontal: defaultPadding,
                    paddingBottom: defaultPadding
                }}>
                <SubtitleText text="Budgets" />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5,
                    marginBottom: 25
                }}>
                    <TitleText text="5 days" size={14} />
                    <TitleText text="$3600" size={14} />
                </View>
                <PrimaryButton onPress={() => console.log('pressed')} />
            </View>
            {/* END BUDGET SECTION */}
        </ScrollView>
    )
}

export default Plan

const styles = StyleSheet.create({})
