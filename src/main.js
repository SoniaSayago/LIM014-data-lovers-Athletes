import { 
countries,    
// searchCountries,
athletesGold,
searchAthletes,
orderAlpha,
athletesAll,
inputTeam,
inputGenderFilter,
sports,
events,

} from './data.js';

import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';
import dataFlag from './data/athletes/flag.js';
import pictograms from './data/athletes/pictograms.js';

addEventListener('DOMContentLoaded', () => {
const dataRio = data.athletes.map(athletes =>athletes) //data athletes
const dataCountriesFlag = dataFlag.map(dataFlag => dataFlag) //data countries flag
const dataPictograms = pictograms.pictograms.map(pictograms => pictograms);
const dataCountriesNoc = data.athletes.map(athletes => athletes.noc) //data athletes noc
const arrayMedalGold = dataRio.filter(athletes => athletes.medal === 'Gold')
const sport = dataRio.map(athletes => athletes.sport)
const dataCountriesTeam = data.athletes.map(athletes => athletes.team) //data athletes team


countries(dataCountriesNoc,dataCountriesFlag);
// searchCountries(dataCountriesFlag);
athletesGold(arrayMedalGold)
searchAthletes(dataRio,arrayMedalGold)
filterSport(sport,dataRio)
filterAlpha(arrayMedalGold)
filterTeam(dataCountriesTeam,dataRio)
inputTeam(dataCountriesTeam);
filterGender(dataRio);
sports(dataPictograms);


// card + modal
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
var popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});






})

// Filter Sport
const filterSport = (sport,dataRio) => {
  document.getElementById("sportRio").addEventListener("change", (event) => {
  document.getElementById('gender').classList.remove('hide');
  const textSport = sportRio.value;
  const sportUser = sport.includes(textSport)
  
  if(sportUser == true) {
    const sportFilter = dataRio.filter(athletes => athletes.sport === textSport) 
    athletesAll(sportFilter);
    
  } else {
    athletesAll(dataRio);
  }
  return textSport;
});
}

// Filter A-Z / Z-A
const filterAlpha = (arrayMedalGold) => {
  const alpha = document.getElementById("orderAlpha");
  const resultText = document.getElementById("result");
  alpha.addEventListener("change", (e) => {
    const arrayOrder = e.target.value;
    orderAlpha(arrayOrder, arrayMedalGold);
  });
}

// Filter Team
const filterTeam = (dataCountriesTeam,dataRio) => {
  document.getElementById("teamRio").addEventListener("change", (event) => {
    const textTeam = teamRio.value;
    const teamUser = dataCountriesTeam.includes(textTeam)
    console.log(teamUser);
    console.log(dataCountriesTeam);
    if(teamUser == true) {
      const teamFilter = dataRio.filter(athletes => athletes.team === textTeam)
      athletesAll(teamFilter);
    } else {
      athletesAll(dataRio);
    }
    return textTeam;
  });
  }

  // Filter Gender
const filterGender = dataRio => {
    document.getElementById("genderRio").addEventListener("change", (event) => {
    const textTeam = genderRio.value;
    console.log(textTeam);

    const textSport = sportRio.value;
    // const sportUser = sport.includes(textSport)

    const sportFilter = dataRio.filter(athletes => athletes.sport === textSport)  
    const eventFilter = sportFilter.map(athletes => athletes.event)
    const genderMaleFilter = sportFilter.filter(athletes => athletes.gender === "M")
    const genderFemaleFilter = sportFilter.filter(athletes => athletes.gender === "F")
    
    inputGenderFilter(genderMaleFilter,genderFemaleFilter, textTeam);
    filterEvent(genderMaleFilter, genderFemaleFilter,textTeam)
    return textTeam;
  });
  }

  const filterEvent =(genderMaleFilter, genderFemaleFilter, textTeam) =>{
    
    document.getElementById("eventRio").addEventListener("change", (event) =>{
    const textEvent = eventRio.value;
    console.log(textEvent)
    

    events(genderMaleFilter, genderFemaleFilter, textTeam, textEvent)
    
      return textEvent;
    
    })
  }





