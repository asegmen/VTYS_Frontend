import React, { useState, useEffect } from "react";

import SideMenu from 'components/side-menu';
import MainContent from 'components/main-content';
import TableSpeakers from 'components/table-speakers';

import styles from "./styles.scss";

const SpeakersScreen = ({ title, pageResponse }) => {
  const [speakerName, setSpeakerName] = useState('');
  const [speakerData, setSpeakerData] = useState(pageResponse);

  console.log(pageResponse);
  useEffect(() => {
    if (speakerName.length > 0) {
      setSpeakerData(pageResponse.filter(x => x.firstName.includes(speakerName)));
    } else {
      setSpeakerData(pageResponse);
    }
  }, [speakerName]);

  return (
    <>
      <SideMenu />
      <MainContent>
        <div className={styles.headingWrap}>
          {
            title && (
              <h1 className={styles.title}>{title}</h1>
            )
          }
          <a href="/speakers/new" className={styles.addNewButton}>ADD NEW SPEAKER</a>

        </div>
        <div className={styles.searchWrap}>
          <span style={{ display: 'inline-block', marginRight: 10 }}>SEARCH:</span>
          <input
            value={speakerName}
            onChange={(e) => setSpeakerName(e.target.value)}
            style={{
              width: 300,
              margin: '30px 0',
              border: '1px solid #212121',
              height: 40,
            }} />
        </div>
        {
          pageResponse && (
            <TableSpeakers data={speakerData} />
          )
        }
      </MainContent>
    </>
  )
};

export default SpeakersScreen;
