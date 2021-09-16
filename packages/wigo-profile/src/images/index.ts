// Common

import wiggyPlaceholder from "./wiggy-placeholder.svg";

// Achievements

import easterChampionBronze from "./achievements/easter-champion-bronze.svg";
import easterChampionGold from "./achievements/easter-champion-gold.svg";
import easterChampionSilver from "./achievements/easter-champion-silver.svg";

import easterParticipantBronze from "./achievements/easter-participant-bronze.svg";
import easterParticipantGold from "./achievements/easter-participant-gold.svg";
import easterParticipantSilver from "./achievements/easter-participant-silver.svg";

import easterTop500Bronze from "./achievements/easter-top-500-bronze.svg";
import easterTop500Gold from "./achievements/easter-top-500-gold.svg";
import easterTop500Silver from "./achievements/easter-top-500-silver.svg";

import ifoBelt from "./achievements/ifo-belt.svg";
import ifoBlk from "./achievements/ifo-blk.svg";
import ifoBry from "./achievements/ifo-bry.svg";
import ifoDitto from "./achievements/ifo-ditto.svg";
import ifoHelmet from "./achievements/ifo-helmet.svg";
import ifoHotcross from "./achievements/ifo-hotcross.svg";
import ifoHzn from "./achievements/ifo-hzn.svg";
import ifoKalm from "./achievements/ifo-kalm.svg";
import ifoTen from "./achievements/ifo-ten.svg";
import ifoWatch from "./achievements/ifo-watch.svg";
import ifoWsote from "./achievements/ifo-wsote.svg";

// Team images

import wigoupStormSm from "./teams/wigoup-storm-sm.png";
import wigoupStormMd from "./teams/wigoup-storm-md.png";
import wigoupStormLg from "./teams/wigoup-storm-lg.png";
import wigoupStormAlt from "./teams/wigoup-storm-alt.png";
import wigoupStormBg from "./teams/wigoup-storm-bg.svg";

import fearsomeFlippersSm from "./teams/fearsome-flippers-sm.png";
import fearsomeFlippersMd from "./teams/fearsome-flippers-md.png";
import fearsomeFlippersLg from "./teams/fearsome-flippers-lg.png";
import fearsomeFlippersAlt from "./teams/fearsome-flippers-alt.png";
import fearsomeFlippersBg from "./teams/fearsome-flippers-bg.svg";

import chaoticWigoersSm from "./teams/chaotic-wigoers-sm.png";
import chaoticWigoersMd from "./teams/chaotic-wigoers-md.png";
import chaoticWigoersLg from "./teams/chaotic-wigoers-lg.png";
import chaoticWigoersAlt from "./teams/chaotic-wigoers-alt.png";
import chaoticWigoersBg from "./teams/chaotic-wigoers-bg.svg";

interface ImageMap {
  [key: string]: string;
}

const achievementBadges: ImageMap = {
  "easter-champion-bronze.svg": easterChampionBronze,
  "easter-champion-gold.svg": easterChampionGold,
  "easter-champion-silver.svg": easterChampionSilver,
  "easter-participant-bronze.svg": easterParticipantBronze,
  "easter-participant-gold.svg": easterParticipantGold,
  "easter-participant-silver.svg": easterParticipantSilver,
  "easter-top-500-bronze.svg": easterTop500Bronze,
  "easter-top-500-gold.svg": easterTop500Gold,
  "easter-top-500-silver.svg": easterTop500Silver,
  "ifo-belt.svg": ifoBelt,
  "ifo-blk.svg": ifoBlk,
  "ifo-bry.svg": ifoBry,
  "ifo-ditto.svg": ifoDitto,
  "ifo-helmet.svg": ifoHelmet,
  "ifo-hotcross.svg": ifoHotcross,
  "ifo-hzn.svg": ifoHzn,
  "ifo-kalm.svg": ifoKalm,
  "ifo-ten.svg": ifoTen,
  "ifo-watch.svg": ifoWatch,
  "ifo-wsote.svg": ifoWsote,
  unknown: wiggyPlaceholder,
};

const teamImages: ImageMap = {
  "wigoup-storm-sm.png": wigoupStormSm,
  "wigoup-storm-md.png": wigoupStormMd,
  "wigoup-storm-lg.png": wigoupStormLg,
  "wigoup-storm-alt.png": wigoupStormAlt,
  "wigoup-storm-bg.svg": wigoupStormBg,
  "fearsome-flippers-sm.png": fearsomeFlippersSm,
  "fearsome-flippers-md.png": fearsomeFlippersMd,
  "fearsome-flippers-lg.png": fearsomeFlippersLg,
  "fearsome-flippers-alt.png": fearsomeFlippersAlt,
  "fearsome-flippers-bg.svg": fearsomeFlippersBg,
  "chaotic-wigoers-sm.png": chaoticWigoersSm,
  "chaotic-wigoers-md.png": chaoticWigoersMd,
  "chaotic-wigoers-lg.png": chaoticWigoersLg,
  "chaotic-wigoers-alt.png": chaoticWigoersAlt,
  "chaotic-wigoers-bg.svg": chaoticWigoersBg,
};

export { achievementBadges, teamImages, wiggyPlaceholder };
