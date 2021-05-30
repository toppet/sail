import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

import "./Crew.scss";

import sailing from "../../assets/images/sailing.png"

function CrewComponent() {
  const [allCrewMembers, setAllCrewMembers] = useState([]);
  const [loadedCrewMembers, setLoadedCrewMembers] = useState([]);
  const [filteredCrewMembers, setFilteredCrewMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const initialCrewMemberCount = 10;
  const nextCrewMemberCount = 2;
  
  useEffect(() => {
    getCrew();
  }, []);
  
  const getCrew = async () => {

    try {
      const response = await fetch("/sailor_team.json");
      const data = await response.json();
      setAllCrewMembers(data);

      const initialNumberOfCrewMembers = data.slice(0, initialCrewMemberCount);

      setLoadedCrewMembers(initialNumberOfCrewMembers);
      setFilteredCrewMembers(initialNumberOfCrewMembers);

    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false);
    }
  };

  const getCrewMember = (crewMember) => {
    return (
      <div key={crewMember.name} className="crew-member" style={{ background: `url(${crewMember.image}) no-repeat center center`, backgroundSize: "cover" }}>
        <div className="crew-member__overlay"></div>
        <div className="crew-member__info">
          <p className="crew-member__name">{crewMember.name}</p>
          <p className="crew-member__duties">{crewMember.duties}</p>
        </div>
      </div>
    )
  }

  const onLoadMoreClicked = async () => {
    setLoading(true);
    
    // Add random wait time before loading more crew members - FOR DEMONSTRATION ONLY
    await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 1000) + 500));
    const currentNumberOfCrewMembersLoaded = loadedCrewMembers.length;
    const sliceFrom = currentNumberOfCrewMembersLoaded;
    const sliceUntil = currentNumberOfCrewMembersLoaded + nextCrewMemberCount;

    const newlyLoadedCrewMembers = allCrewMembers.slice(sliceFrom, sliceUntil);
    const crewWithNewMembers = [ ...loadedCrewMembers, ...newlyLoadedCrewMembers ];
    
    setLoadedCrewMembers(crewWithNewMembers);
    setFilteredCrewMembers(crewWithNewMembers);

    setLoading(false);
  }

  const renderLoading = () => {
    if(loadedCrewMembers.length === allCrewMembers.length) {
      return <p className="loading-done">All team members are loaded<FontAwesomeIcon icon={faFlag} /></p>;
    }
    
    if(loading) {
      return (
        <div className="loading">
          <img src={sailing} alt="sailing-icon" />
        </div>
      );
    }

    return <button className="load-more-btn" onClick={onLoadMoreClicked}>Load More</button>;
  }

  const onFilterClick = (e) => {
    const filterCrewBy = e.target.value;

    if(e.target.value === "show-all") {
      console.log('showall', loadedCrewMembers);
      setFilteredCrewMembers(loadedCrewMembers);
      return;
    }
    const filteredCrewMembers = loadedCrewMembers.filter(crewMember => crewMember.duty_slugs.includes(filterCrewBy));
    console.log('filterBy',filterCrewBy, 'filteredCrewMembers', filteredCrewMembers);

    setFilteredCrewMembers(filteredCrewMembers);
  }

  return (
    <section className="crew">
      <h2 className="headline">Unser team</h2>
      <h4 className="subtitle">SUBTITLES VON UNSEREM TEAM</h4>
      <hr />

      <div className="crew-filters">
        <input type="radio" id="show-all" name="crew-filter" value="show-all" onClick={onFilterClick} defaultChecked/>
        <label htmlFor='show-all'>Show All</label>
      
        <input type="radio" id="trim" name="crew-filter" value="trim" onClick={onFilterClick}/>
        <label htmlFor='trim'>Trim</label>
      
        <input type="radio" id="tactic" name="crew-filter" value="tactic" onClick={onFilterClick}/>
        <label htmlFor='tactic'>Tactic</label>

        <input type="radio" id="hemlsman" name="crew-filter" value="helmsman" onClick={onFilterClick}/>
        <label htmlFor='hemlsman'>Helmsman</label>
      </div>

      <div className="crew-members">
        {
          filteredCrewMembers.map(crewMember => getCrewMember(crewMember))
        }
      </div>

      { renderLoading() }
    </section>
  );
}


export default CrewComponent;