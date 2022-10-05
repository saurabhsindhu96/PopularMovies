import { Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { ScreenWrapper } from "../../Components/Wrappers";
import AppColors from "../../Utills/AppColors";
import { height, width } from "react-native-dimension";
import { Header, HeaderCenter } from "../../Components/Headers";

const Feedback = (props) => {
  const myAPIKey = "89dc45d9ed31a01c19b6ee377fc6cb3c";

  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log("Props checking", props.route.params);
    const movieID = props.route.params.ID;
    getMovieDetail(movieID);
  }, []);

  const getMovieDetail = async (movieID) => {
    await fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${myAPIKey}`)
      .then(async (data) => {
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}?api_key=${myAPIKey}&language=en-US`
        )
          .then((data) => {
            return data.json();
          })
          .then((movies) => {
            setMovie(movies);
            console.log("Check kr bhai movie ki detail", movies);
          });
      })
      .then((post) => {
        // console.log(post.title);
      });
  };

  const navigation = props.navigation;
  return (
    <ScreenWrapper transclucent statusBarColor={AppColors.transparent}>
      <Header
        title={movie?.title}
        onPress={() => navigation.goBack()}
        onPressDone={{}}
      />
      <View style={{ flex: 1, backgroundColor: AppColors.lightGray }}>
        <View
          style={{
            position: "absolute",
            top: "10%",
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: width(5), fontWeight: "bold" }}>
            {movie?.title}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: "16%",
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
            }}
            style={{ width: width(60), height: height(32) }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: "55%",
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: width(4),
              marginLeft: width(10),
              marginRight: width(10),
            }}
          >
            {movie?.overview}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: "80%",
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: width(3),
              marginLeft: width(10),
              marginRight: width(10),
            }}
          >
            {"Popularity: " +
              movie?.popularity +
              " | Release Date: " +
              movie?.release_date}
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Feedback;
