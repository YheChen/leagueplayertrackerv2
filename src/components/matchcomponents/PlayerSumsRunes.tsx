import React from "react";

export default function PlayerSumsRunes({ playerData }) {
  function getSummonerSpell(spellId) {
    switch (spellId) {
      case 1:
        return "summoner_boost.png";
      case 3:
        return "summoner_exhaust.png";
      case 4:
        return "summoner_flash.png";
      case 6:
        return "summoner_haste.png";
      case 7:
        return "summoner_heal.png";
      case 11:
        return "summoner_smite.png";
      case 12:
        return "summoner_teleport.png";
      case 13:
        return "summonermana.png";
      case 14:
        return "summonerignite.png";
      case 21:
        return "summonerbarrier.png";
      case 32:
        return "summoner_mark.png";
      default:
        return null;
    }
  }
  function getSummonerRunes(runeId) {
    switch (runeId) {
      case 8000:
        return "7201_precision.png";
      case 8005:
        return "precision/presstheattack/presstheattack.png";
      case 8008:
        return "precision/lethaltempo/lethaltempotemp.png";
      case 8009:
        return "precision/presenceofmind/presenceofmind.png";
      case 8010:
        return "precision/conqueror/conqueror.png";
      case 8014:
        return "precision/coupdegrace/coupdegrace.png";
      case 8017:
        return "precision/cutdown/cutdown.png";
      case 8021:
        return "precision/fleetfootwork/fleetfootwork.png";
      case 8100:
        return "7200_domination.png";
      case 8105:
        return "domination/relentlesshunter/relentlesshunter.png";
      case 8106:
        return "domination/ultimatehunter/ultimatehunter.png";
      case 8112:
        return "domination/electrocute/electrocute.png";
      case 8120:
        return "domination/ghostporo/ghostporo.png";
      case 8124:
        return "domination/predator/predator.png";
      case 8126:
        return "domination/cheapshot/cheapshot.png";
      case 8128:
        return "domination/darkharvest/darkharvest.png";
      case 8134:
        return "domination/ingenioushunter/ingenioushunter.png";
      case 8135:
        return "domination/treasurehunter/treasurehunter.png";
      case 8136:
        return "domination/zombieward/zombieward.png";
      case 8138:
        return "domination/eyeballcollection/eyeballcollection.png";
      case 8139:
        return "domination/tasteofblood/greenterror_tasteofblood.png";
      case 8143:
        return "domination/suddenimpact/suddenimpact.png";
      case 8200:
        return "7202_sorcery.png";
      case 8210:
        return "sorcery/transcendence/transcendence.png";
      case 8214:
        return "sorcery/summonaery/summonaery.png";
      case 8224:
        return "sorcery/nullifyingorb/pokeshield.png";
      case 8226:
        return "sorcery/manaflowband/manaflowband.png";
      case 8229:
        return "sorcery/arcanecomet/arcanecomet.png";
      case 8230:
        return "sorcery/phaserush/phaserush.png";
      case 8232:
        return "sorcery/waterwalking/waterwalking.png";
      case 8233:
        return "sorcery/absolutefocus/absolutefocus.png";
      case 8234:
        return "sorcery/celerity/celeritytemp.png";
      case 8236:
        return "sorcery/gatheringstorm/gatheringstorm.png";
      case 8237:
        return "sorcery/scorch/scorch.png";
      case 8242:
        return "sorcery/unflinching/unflinching.png";
      case 8275:
        return "sorcery/nimbuscloak/6361.png";
      case 8299:
        return "sorcery/laststand/laststand.png";
      case 8300:
        return "7203_whimsy.png";
      case 8304:
        return "inspiration/magicalfootwear/magicalfootwear.png";
      case 8306:
        return "inspiration/hextechflashtraption/hextechflashtraption.png";
      case 8313:
        return "inspiration/perfecttiming/perfecttiming.png";
      case 8316:
        return "inspiration/miniondematerializer/miniondematerializer.png";
      case 8321:
        return "inspiration/futuresmarket/futuresmarket.png";
      case 8345:
        return "inspiration/biscuitdelivery/biscuitdelivery.png";
      case 8347:
        return "inspiration/cosmicinsight/cosmicinsight.png";
      case 8351:
        return "inspiration/glacialaugment/glacialaugment.png";
      case 8352:
        return "inspiration/timewarptonic/timewarptonic.png";
      case 8358:
        return "inspiration/masterkey/masterkey.png";
      case 8360:
        return "inspiration/unsealedspellbook/unsealedspellbook.png";
      case 8369:
        return "inspiration/firststrike/firststrike.png";
      case 8400:
        return "7204_resolve.png";
      case 8401:
        return "resolve/mirrorshell/mirrorshell.png";
      case 8410:
        return "resolve/approachvelocity/approachvelocity.png";
      case 8429:
        return "resolve/conditioning/conditioning.png";
      case 8437:
        return "resolve/graspoftheundying/graspoftheundying.png";
      case 8439:
        return "resolve/veteranaftershock/veteranaftershock.png";
      case 8444:
        return "resolve/secondwind/secondwind.png";
      case 8446:
        return "resolve/demolish/demolish.png";
      case 8451:
        return "resolve/overgrowth/overgrowth.png";
      case 8453:
        return "resolve/revitalize/revitalize.png";
      case 8463:
        return "resolve/fontoflife/fontoflife.png";
      case 8465:
        return "resolve/guardian/guardian.png";
      case 8473:
        return "resolve/boneplating/boneplating.png";
      case 9101:
        return "precision/overheal.png";
      case 9103:
        return "precision/legendbloodline/legendbloodline.png";
      case 9104:
        return "precision/legendalacrity/legendalacrity.png";
      case 9105:
        return "precision/legendtenacity/legendtenacity.png";
      case 9111:
        return "precision/triumph.png";
      case 9923:
        return "domination/hailofblades/hailofblades.png";
      case 5001:
        return "statmodshealthscalingicon.png";
      case 5002:
        return "statmodsarmoricon.png";
      case 5003:
        return "statmodsmagicresicon.magicresist_fix.png";
      case 5005:
        return "statmodsattackspeedicon.png";
      case 5007:
        return "statmodscdrscalingicon.png";
      case 5008:
        return "statmodsadaptiveforceicon.png";
      default:
        return null;
    }
  }
  if (!playerData || !playerData.summoner1Id || !playerData.summoner2Id) {
    return <div>Loading player data...</div>;
  }

  return (
    <div className="flex space-x-1 items-center">
      {/* Summoner Spells */}
      <div className="flex flex-col space-y-1">
        <img
          src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/${getSummonerSpell(
            playerData.summoner1Id
          )}`}
          width="30"
          height="30"
          className="rounded bg-gray-800"
        />
        <img
          src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d/${getSummonerSpell(
            playerData.summoner2Id
          )}`}
          width="30"
          height="30"
          className="rounded bg-gray-800"
        />
      </div>

      {/* Runes */}
      <div className="flex flex-col space-y-1">
        {/* First Rune with Smaller Circle */}
        <div
          className="bg-gray-800 rounded-full p-0.5"
          style={{ width: "28px", height: "28px" }}
        >
          <img
            src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${getSummonerRunes(
              playerData.perks.styles[0].selections[0].perk
            )}`}
            width="26"
            height="26"
            className="rounded-full"
          />
        </div>

        {/* Second Rune without Background */}
        <img
          src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${getSummonerRunes(
            playerData.perks.styles[1].style
          )}`}
          width="30"
          height="30"
        />
      </div>
    </div>
  );
}
