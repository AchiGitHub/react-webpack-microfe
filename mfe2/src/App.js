import React from 'react';
import { data } from '../utils/config';

const MFE1Button = React.lazy(
  () => import('MFE1/Button')
);

const MFE1Card = React.lazy(
  () => import('MFE1/Card')
);

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Celebrities: Renders from MFE2</h1>
      <h2>Cards Rendered from MFE1</h2>
      <div style={styles.gridContainer}>
        <React.Suspense fallback='Loading Button'>
          {data.map((item, idx) => {
            return <div style={styles.gridItem}>
              <MFE1Card key={idx} imageURL={item.imageURL} name={item.name} job={item.job} />
            </div>
          })}
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    padding: '10px',
  },
  gridItem: {
    padding: '20px',
  }
}
