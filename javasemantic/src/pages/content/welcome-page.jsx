import InfoPage from "../../components/info-page/info-page";

const WelcomePage = (props) => {
  return (
    <InfoPage path={props.location.pathname}>
      <h1>This Is The Welcome Page</h1>
      <p>
        Things wil go here, like, &quot;Hi this is our project boo&quot; but
        obviously more profesional and shit.
      </p>
      <p>
        Homo Ludens is a book originally published in Dutch in 1938[2] by Dutch
        historian and cultural theorist Johan Huizinga.[3] It discusses the
        importance of the play element of culture and society.[4] Huizinga
        suggests that play is primary to and a necessary (though not sufficient)
        condition of the generation of culture. The Latin word ludens is the
        present active participle of the verb ludere, which itself is cognate
        with the noun ludus. Ludus has no direct equivalent in English, as it
        simultaneously refers to sport, play, school, and practice.[5]
      </p>
    </InfoPage>
  );
};

export default WelcomePage;
