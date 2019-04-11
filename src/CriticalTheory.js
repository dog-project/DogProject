import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingLeft: "30px",
    paddingRight: "30px",
    textIndent: "2em"
  },
  header: {
    marginTop: "20px",
    marginBottom: "30px",
    textAlign: "center"
  },
  separation: {
    display: "inline-block",
    marginTop: "30px",
    marginBottom: "30px"
  }
});

class CriticalTheory extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.header}>
          "Cuteness" across Cultures
        </Typography>
        <Typography variant="p">
          It is important to recognize that our project is essentially focused
          on the English-language sense of “cuteness” and “cute dog”, which has
          its own <a href="/philosophy">philosophical problems</a>. There are
          other languages around the world that have similar terms. But, these
          other terms are also importantly different from the way we understand
          “cute” in English. Below is an explanation of the closest translation
          for “cute” into four different languages (Hindi, Urdu, Japanese and
          Chinese). Once we recognize the differences, we notice that even
          native English speakers may have different interpretations of
          cuteness---there may be a Texas “cute” that differs from a New England
          “cute”.
        </Typography>
        <br />
        <Typography variant="p">
          <a
            href="https://www.google.com/search?tbm=isch&source=hp&biw=1440&bih=814&ei=GmKvXLanAeKyggeYooSACA&q=cute+dog&oq=cute+dog&gs_l=img.3..0l10.2240.2884..3017...0.0..1.60.454.8......2....1..gws-wiz-img.....0.KkLa9oHmYxc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Image Search for "cute dog" in English
          </a>
        </Typography>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Hindi - प्यारा (pyaara)</b>
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            Hindi has no exact translation for “cute.” The closest literal
            translation is the adjective “प्यारा”, (pronounced pyaara), which
            translates to lovable. It can describe something or someone darling,
            dear, beloved or, something lovely, pleasing, or charming.
            <br />
            <br />
          </Typography>
          <Typography variant="p">
            The root for this is “प्यार”, which is a direct translation of love.
            So, it can be used exactly in the way love or lovable is used in
            English.
          </Typography>
          <br />
          <Typography variant="p">
            Because Hindi has different adjective forms for different genders,
            there is a slight difference in describing a male or female (of any
            species) as lovable (or loving). Things that count as male gendered
            are referred to as “pyaara” and female gendered ones are referred to
            as “pyaari”. So, a lovable male elephant would be a “pyaara”
            elephant and a lovable female cat would be a “pyaari” cat. But what
            about a lovable picture? Things like pictures or music that do not
            have genders are still assigned gender forms as one of the two by
            common accepted use. So a charming talk would be “pyaari” talk and a
            lovable song would be a “pyaara” song.
            <br />
            <br />
            Example of uses:
            <ul>
              <li>
                यह प्यारा है (yeh pyaara hai) translates to [This is lovable]
              </li>
              <li>
                वह कुत्ता प्यारा है (vah kutta pyaara hai) translates to [That
                dog is lovable]
              </li>
              <li>
                वह प्यार से बोलता है (vah pyaar se bolta hai) translates to [He
                speaks with love]
              </li>
              <li>
                वह चित्र प्यारा है (vah chitra pyaara hai) translates to that
                [That picture is lovable]
              </li>
            </ul>
          </Typography>
          <Typography variant="p">
            <a
              href="https://www.google.com/search?rlz=1C1JZAP_enUS798US798&biw=1536&bih=801&tbm=isch&sa=1&ei=X5qrXLXlKaXl_QazoavQCw&q=प्यारा+कुत्ता+&oq=प्यारा+कुत्ता+&gs_l=img.3..0i30.8776.11935..12769...0.0..0.74.198.3......1....1j2..gws-wiz-img.......0j0i7i30.omgKdrmPNAo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Google image search for “प्यारा कुत्ता” (cute dog)
            </a>{" "}
            -- Note that the results can be somewhat different because because
            it is a low frequency phrase in the language, as the literal
            translation of dog, kutta, is considered a mild expletive.
          </Typography>
        </div>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Urdu - پیارا (pyārā)</b>
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            Spoken Urdu has a syntax that’s almost identical to Hindi, so the
            uses of “pyaar” are almost identical to how it’s used in Hindi. It
            can describe something or someone darling, dear, beloved or,
            something lovely, pleasing, or charming. The only difference comes
            when it is used as an adjective and genders are assigned to
            non-gendered things and the languages differ in the word to describe
            the same thing. You might recall that “pyaara chitra” was used to
            describe a lovable painting (pyaara = lovable (for males), chitra =
            painting). However, in Urdu, it would be “pyaari tasveer” (pyaari =
            lovable (for females), tasweer (painting/picture). The change from
            pyaara in Hindi to pyaari in Urdu is entirely because of differences
            in how the subjects are considered and the choice of gender rather
            than the notion of cuteness itself.
          </Typography>
          <br />
          <Typography variant="p">
            <a
              href="https://www.google.com/search?q=پیاری+کتا&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiBj7XqmcHhAhVpm-AKHSt9AiUQ_AUIDygC&biw=1536&bih=801"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Google image search for “ پیاری کتا’’ (cute dog) in Urdu
            </a>{" "}
            -- Note again differences in image search results from English for
            similar reasons as Hindi.
          </Typography>
        </div>

        <div className={classes.separation}>
          <Typography variant="h5">
            <b>Japanese - かわいい (kawai-i)</b>
          </Typography>
          <br />
          <br />
          <Typography variant="p">
            The translation from English is straightforward, although there is
            some ambiguity when translating from Japanese to English. In
            Japanese, this word is commonly used to describe the human figure,
            especially adult females (Note that a{" "}
            <a
              href="https://www.google.co.jp/search?q=かわいい&tbm=isch&source=hp&sa=X&ved=2ahUKEwi1iJChl-vgAhUwmuAKHUqnDPMQsAR6BAgFEAE&cshid=1551795127715369&biw=1194&bih=698"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google image search for “かわいい”
            </a>{" "}
            returns mostly adult female figures). On the other hand, in English,
            “a cute girl” sounds fine, but “a cute woman” may sound a bit off.
            The Japanese word かわいい can also apply for males who have a
            unisex-appearance. It works almost in the same way as English when
            describing animals, but may tend to denote smaller and fluffier dogs
            than does{" "}
            <a
              href="https://www.google.co.jp/search?biw=2491&bih=1395&tbm=isch&sa=1&ei=c5CrXOytJuGv_QaZra6gCg&q=cute+dog&oq=cute+dog&gs_l=img.3..0i30l10.88918.89581..89686...0.0..0.69.493.8......0....1..gws-wiz-img.JMo49W47ooQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              “cute dog” in English
            </a>
            . People also attribute “かわいい” to sweets and desserts in
            Japanese, a marked difference from the common use of “cute” in
            English.
          </Typography>
          <br />
          <Typography variant="p">
            <a
              href="https://www.google.co.jp/search?biw=1194&bih=698&tbm=isch&sa=1&ei=vYN-XKCLJ7Ge_QbIg45Y&q=かわいい犬&oq=かわいい犬&gs_l=img.3..0i4i37l8j0l2.249530.250059..250506...0.0..0.59.229.4......0....1..gws-wiz-img.......0i4.dILkKx-xhk"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Google image search for “かわいい犬” (cute dog) in Japanese
            </a>{" "}
          </Typography>
        </div>

        <div className={classes.separation} />
        <Typography variant="h5">
          <b>Chinese - 可爱(ke-ài)</b>
        </Typography>
        <br />
        <br />
        <Typography variant="p">
          For the most part, Chinese “可爱(ke-ài)” is interchangeable with
          English “cute.” However, it can occasionally mean “lovable” and is
          used to describe virtuous, kind and friendly human figures; for
          example the Chinese phrase “...add exact phrase here…” translates
          literally to “her grandma is cute”. In describing non-human objects;
          Chinese cute is more relevant to small and fluffy things, which tends
          to imply a certain kind of dog.
          <br />
          <br />
        </Typography>
        <Typography variant="p">
          An interesting fact is that in modern Chinese “cute” means something
          different in ancient Chinese. In ancient Chinese, “cute” is more
          accurate to translate it into “可怜 (ke-lián)”. According to
          structural analysis, it means roughly “things that are worth treating
          well or to empathize with”. 可怜 (ke-lián) was primarily used to
          describe plants, flowers and small accessories. It also used to
          describe a talented-male-poet (it’s not surprising that the word
          “cute” is mostly seen in ancient poetry). However, very few use the
          word to describe dogs at all. A good dog is described as loyal and
          brave.
        </Typography>
        <br />
        <br />
        <Typography variant="p">
          <a
            href="https://www.google.com/search?biw=1194&bih=698&tbm=isch&sa=1&ei=u4p-XPPmMqa2ggf02pz4Cg&q=可爱+狗&oq=可爱+狗&gs_l=img.3..0i12l10.6670.7749..7970...0.0..0.61.291.5......1....1..gws-wiz-img.c4AfZrXbGUs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Image Search for “可爱 狗” (cute dog) in Chinese.
          </a>
        </Typography>
        <br />
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(CriticalTheory);
