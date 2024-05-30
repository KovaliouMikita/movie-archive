import { useCallback, useEffect, useState } from "react";
import { Api_k, UrlIdMovie, appendMovie } from "../assets/key";
import { IconStar } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, ActionIcon, rem, Button } from "@mantine/core";
import { BigMovieCardProps, dataProp, Genres, productionCompaniesProps } from "./Interfaces";
import { NoPoster } from "./svgComponents";

export default function BigMovieCard({ idMovie, setSection }: BigMovieCardProps) {
  const [dataMovie, setDataMovie] = useState<dataProp>();
  const [opened, { open, close }] = useDisclosure(false);

  const getImgIcon = useCallback((path: string | undefined, altImg: string) => {
    if (path != null) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    } else {
      return altImg;
    }
  }, []);

  const getMovieById = useCallback((idMovie: number) => {
    fetch(UrlIdMovie + idMovie + Api_k + appendMovie)
      .then((res) => res.json())
      .then((data) => setDataMovie(data));
  }, []);

  useEffect(() => {
    getMovieById(idMovie);
  }, [getMovieById, idMovie]);
  console.log(dataMovie);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Your rating" centered>
        <Button.Group>
          <Button>Save</Button>
          <Button>Remove rating</Button>
        </Button.Group>
      </Modal>

      <div className="BigMovieCard">
        <div className="BigMoviesCard_link">
          <a onClick={() => setSection("Movies")}>Movie</a> <p>/</p>
          <a>{dataMovie?.title}</a>
        </div>

        <div className="BigMovieCard_Contener">
          <div className="ImgContent">
            {dataMovie?.poster_path !== null && <img src={`https://image.tmdb.org/t/p/w500${dataMovie?.poster_path}`}></img>}
            {dataMovie?.poster_path == null && (
              <>
                <NoPoster />
                No poster
              </>
            )}
          </div>
          <div className="BigMovieCard_Contener_Discription">
            <div>
              <p className="TitleName">{dataMovie?.title}</p>
              <p className="Grey16">{dataMovie?.release_date.slice(0, 4)}</p>
            </div>

            <div className="RateBlock">
              <IconStar fill="true" color="#FAB005" />
              <p>{dataMovie?.vote_average}</p> <p className="Grey16">({dataMovie?.vote_count})</p>
            </div>

            <div className="BigMovieCard_Contener_Discription_Detales">
              <div className="Flex">
                <p className="Grey16">Duration</p>
                <p>{dataMovie?.runtime}</p>
              </div>
              <div className="Flex">
                <p className="Grey16">Premiere</p>
                <p>{dataMovie?.release_date}</p>
              </div>
              <div className="Flex">
                <p className="Grey16">Budget</p>
                <p>${dataMovie?.budget}</p>
              </div>
              <div className="Flex">
                <p className="Grey16">Gross worldwide</p>
                <p>${dataMovie?.revenue}</p>
              </div>
              <div className="Flex">
                <p className="Grey16">Genres</p>
                {dataMovie?.genres?.map((i: Genres) => (
                  <p key={i.id}> {i.name}</p>
                ))}
              </div>
            </div>
          </div>

          <ActionIcon onClick={open} variant="default" size="28" aria-label="Star">
            <IconStar style={{ width: rem(20) }} stroke={1.5} />
          </ActionIcon>
        </div>
        <div className="More_Detales">
          <div className="TrailerBlock">
            <p className="Bold20">Trailer</p>
            <iframe
              // src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1I2E1mAYNqOiw660"
              src={`https://www.youtube.com/embed/${dataMovie?.videos?.results[0]?.key}`}
              title="YouTube video player"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              // allowfullscreen
            ></iframe>{" "}
          </div>
          <hr></hr>
          <div className="DiscriptionBlock">
            <p className="Bold20">Discription</p>
            <p>{dataMovie?.overview}</p>
          </div>
          <hr />
          <div className="ProductionBlock">
            <p className="Bold20">Production</p>

            {dataMovie?.production_companies.map((i: productionCompaniesProps) => (
              <div key={i.name} className="ProductionBlock_Companies">
                {/* <img src={`https://image.tmdb.org/t/p/w500/${i?.logo_path}`}></img> */}
                <img src={getImgIcon(i?.logo_path, "/src/assets/ClaperBoard.png")}></img>
                <p className="Bold16">{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
