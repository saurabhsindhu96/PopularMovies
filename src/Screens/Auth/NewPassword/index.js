import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import AppColors from "../../../Utills/AppColors";
import styles from "./styles";
import { HeaderCenter } from "../../../Components/Headers";
import { ScrollView } from "react-native-gesture-handler";
import { height, width } from "react-native-dimension";
import BottomModal from "../../../Components/BottomModal/BottomModal";

export default NewPassword = ({ navigation }) => {
  const bottomPopUpRef = useRef(null);
  let dropdownData = [
    {
      value: "airing_today",
    },
    {
      value: "popular",
    },
    {
      value: "top_rated",
    },
    {
      value: "latest",
    },
  ];
  const myAPIKey = "89dc45d9ed31a01c19b6ee377fc6cb3c";
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState("tv");
  const [selectedDropValue, setSelectedDropValue] = useState("popular");

  useEffect(() => {
    getMovies(selectedDropValue);
  }, [selectedDropValue]);

  const getMovies = async (dropVal) => {
    console.log("Coming in Tv", dropVal);
    await fetch(`https://api.themoviedb.org/3/tv/76341?api_key=${myAPIKey}`)
      .then(async (data) => {
        await fetch(
          `https://api.themoviedb.org/3/tv/${dropVal}?api_key=${myAPIKey}&language=en-US`
        )
          .then((data) => {
            return data.json();
          })
          .then((movies) => {
            if (movies?.results?.length > 0) {
              setMovies([]);
              console.log("Setting Movies", movies?.results);
              setMovies(movies?.results);
            }
          });
      })
      .then((post) => {
        // console.log(post.title);
      });
  };
  const onClosePopup = () => {
    bottomPopUpRef.current?.closePopUp();
  };
  const onShowPopup = () => {
    bottomPopUpRef.current?.showPopUp();
  };
  const DropDownList = () => {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: height(5),
        }}
      >
        {dropdownData?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedDropValue(item.value);
                onClosePopup();
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: width(5),
                  marginVertical: height(1),
                }}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <HeaderCenter headerMain={styles.header} title="TV Shows" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: height(1),
            marginBottom: height(4),
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Landing");
            }}
            style={{
              borderBottomColor: selected == "movies" ? "black" : "transparent",
              borderBottomWidth: 2,
            }}
          >
            {selected == "movies" ? (
              <Text
                style={{
                  fontSize: width(3.5),
                  fontWeight: "bold",
                  lineHeight: height(3),
                  marginVertical: height(1),
                }}
              >
                Movies
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: width(3.5),
                  fontWeight: "bold",
                  lineHeight: height(3),
                  marginVertical: height(1),
                  color: AppColors.dimgray,
                }}
              >
                Movies
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OnBoarding");
            }}
            style={{
              borderBottomColor: selected == "search" ? "black" : "transparent",
              borderBottomWidth: 2,
            }}
          >
            {selected == "search" ? (
              <Text
                style={{
                  fontSize: width(3.5),
                  fontWeight: "bold",
                  lineHeight: height(3),
                  marginVertical: height(1),
                }}
              >
                Search Results
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: width(3.5),
                  fontWeight: "bold",
                  lineHeight: height(3),
                  marginVertical: height(1),
                  color: AppColors.dimgray,
                }}
              >
                Search Results
              </Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TvShows")}
            style={{
              borderBottomColor: selected == "tv" ? "black" : "transparent",
              borderBottomWidth: 2,
            }}
          >
            {selected == "tv" ? (
              <Text
                style={{
                  fontSize: width(3.5),
                  fontWeight: "bold",
                  lineHeight: height(3),
                  marginVertical: height(1),
                }}
              >
                TV Shows
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: width(3.5),
                  fontWeight: "bold",
                  lineHeight: height(3),
                  marginVertical: height(1),
                  color: AppColors.dimgray,
                }}
              >
                TV Shows
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: height(1),
            marginBottom: height(4),
          }}
          onPress={() => onShowPopup()}
        >
          <View style={{ borderColor: "black", width: "70%", borderWidth: 2 }}>
            <Text
              style={{
                fontSize: width(3.5),
                marginVertical: height(1),
                marginHorizontal: width(5),
              }}
            >
              {selectedDropValue.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>

        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            {movies?.length > 0 &&
              movies?.map((item, index) => {
                console.log("Checking Data of movies", item);
                return (
                  <View
                    style={{
                      width: "90%",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginHorizontal: width(3),
                      marginVertical: height(1),
                    }}
                    key={index}
                  >
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/original/${item?.poster_path}`,
                      }}
                      style={{ width: width(24), height: height(12) }}
                    />
                    <View style={{ flexDirection: "column" }}>
                      <TouchableOpacity style={{ marginLeft: width(5) }}>
                        <Text
                          style={{
                            fontSize: width(3),
                            fontWeight: "bold",
                            width: width(50),
                          }}
                        >
                          {item?.original_name}
                        </Text>
                        <Text style={{ fontSize: width(3) }}>
                          {"Popularity:" + item?.popularity}
                        </Text>
                        <Text style={{ fontSize: width(3) }}>
                          {"Release Date:" + item?.first_air_date}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          marginLeft: width(5),
                          flexDirection: "row",
                          width: width(60),
                          backgroundColor: "rgb(82, 179, 208)",
                          height: height(4),
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: height(1.8),
                        }}
                        onPress={() =>
                          navigation.navigate("Details", { ID: item?.id })
                        }
                      >
                        <Text style={{ color: "white", fontSize: width(3) }}>
                          More Details
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
          </View>
        </ScrollView>

        <BottomModal
          ref={bottomPopUpRef}
          onTouchOutsideClose={true}
          renderContentComponent={<DropDownList />}
        />
      </View>
    </>
  );
};
