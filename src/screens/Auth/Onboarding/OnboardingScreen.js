import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const OnboardingScreen = ({navigation}) => {
  const [step, setStep] = useState(1);

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                height: 445,
                width: '100%',
                backgroundColor: '#F54D4D',
                borderBottomStartRadius: 200,
              }}>
              <Image
                source={require('../../../assets/images/cardmobile.png')}
                resizeMode="contain"
                style={{
                  height: 179,
                  width: 140,
                  marginTop: 60,
                }}
              />
            </View>
            <View
              style={{
                height: 300,
                width: '100%',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 24,
                }}>
                Flexible
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontSize: 18,
                  marginTop: 30,
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae dictum turpis. Fusce hendrerit quam vel.
              </Text>
            </View>
            <View
              style={{
                height: 80,
                width: '100%',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity
                onPress={() => setStep(2)}
                style={{
                  backgroundColor: '#F54D4D',
                  height: 50,
                  width: 150,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 2:
        return (
          <View>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  height: 445,
                  width: '100%',
                  backgroundColor: '#F54D4D',
                  borderBottomStartRadius: 200,
                }}>
                <Image
                  source={require('../../../assets/images/cardmobile2.png')}
                  resizeMode="contain"
                  style={{
                    height: 179,
                    width: 140,
                    marginTop: 150,
                    marginLeft: 50,
                  }}
                />
              </View>
              <View
                style={{
                  height: 300,
                  width: '100%',
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  Faster
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    marginTop: 30,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae dictum turpis. Fusce hendrerit quam vel.
                </Text>
              </View>
              <View
                style={{
                  height: 80,
                  width: '100%',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                }}>
                <TouchableOpacity
                  onPress={() => setStep(3)}
                  style={{
                    backgroundColor: '#F54D4D',
                    height: 50,
                    width: 150,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      case 3:
        return (
          <View>
            <View
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  height: 445,
                  width: '100%',
                  backgroundColor: '#F54D4D',
                  borderBottomStartRadius: 200,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <Image
                  source={require('../../../assets/images/cardmobile3.png')}
                  resizeMode="contain"
                  style={{
                    height: 323,
                    width: 252,
                    top: 20,
                  }}
                />
              </View>
              <View
                style={{
                  height: 300,
                  width: '100%',
                  paddingHorizontal: 20,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 24,
                  }}>
                  Closer
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    marginTop: 30,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae dictum turpis. Fusce hendrerit quam vel.
                </Text>
              </View>
              <View
                style={{
                  height: 80,
                  width: '100%',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                }}>
                <TouchableOpacity
                  onPress={() => handleFinish()}
                  style={{
                    backgroundColor: '#F54D4D',
                    height: 50,
                    width: 150,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  const handleFinish = () => {
    navigation.navigate('Pin');
  };

  return <View>{renderContent()}</View>;
};

export default OnboardingScreen;
