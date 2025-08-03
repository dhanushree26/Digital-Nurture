import React from 'react';

// --- COURSE DETAILS (If statement pattern) ---
function CourseDetails({ show }) {
  if (!show) return null;
  return (
    <div>
      <h1 style={{
        fontWeight: 700,
        fontSize: '2em',
        margin: 0,
        marginBottom: 28
      }}>Course Details</h1>
      <div style={{ fontSize: 24 }}>
        <div style={{ fontWeight: '700', marginTop: 8 }}>Angular</div>
        <div style={{ marginBottom: 24 }}>4/5/2021</div>
        <div style={{ fontWeight: '700' }}>React</div>
        <div style={{ marginBottom: 8 }}>6/3/20201</div>
      </div>
    </div>
  );
}

// --- BOOK DETAILS (Ternary operator pattern) ---
function BookDetails({ show }) {
  return show ? (
    <div>
      <h1 style={{
        fontWeight: 700,
        fontSize: '2em',
        margin: 0,
        marginBottom: 28
      }}>Book Details</h1>
      <div style={{ fontSize: 22 }}>
        <div>
          <span style={{ fontWeight: 600 }}>Master React</span>
          <div style={{ marginBottom: 4 }}>670</div>
        </div>
        <div style={{ marginTop: 18 }}>
          <span style={{ fontWeight: 600 }}>Deep Dive into Angular 11</span>
          <div style={{ marginBottom: 4 }}>800</div>
        </div>
        <div style={{ marginTop: 18 }}>
          <span style={{ fontWeight: 600 }}>Mongo Essentials</span>
          <div>450</div>
        </div>
      </div>
    </div>
  ) : null;
}

// --- BLOG DETAILS (Element variable and && operator pattern) ---
function BlogDetails({ show }) {
  let content = null;
  if (show) {
    content = (
      <div>
        <h1 style={{
          fontWeight: 700,
          fontSize: '2em',
          margin: 0,
          marginBottom: 28
        }}>Blog Details</h1>

        <div style={{ fontSize: 22 }}>
          <div style={{ fontWeight: 700, fontSize: '1.2em' }}>React Learning</div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>Stephen Biz</div>
          <div style={{ marginBottom: 16 }}>Welcome to learning React!</div>

          <div style={{ fontWeight: 700, fontSize: '1.2em' }}>Installation</div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>Schwezdenier</div>
          <div>You can install React from npm.</div>
        </div>
      </div>
    );
  }
  return show && content;
}

// --- MAIN APP WITH PRECISE LAYOUT MATCHING THE IMAGE ---
function App() {
  // Styles for three columns, vertical lines, main container:
  const colStyle = {
    flex: 1,
    padding: '0 36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: 320,
    boxSizing: 'border-box'
  };
  const lineStyle = {
    width: 4,
    minWidth: 4,
    maxWidth: 4,
    backgroundColor: 'green',
    height: '83vh',
    alignSelf: 'stretch',
    margin: '0 10px'
  };
  const mainWrapStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '95vh',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '20px',
    background: "#fff"
  };

  return (
    <div style={mainWrapStyle}>
      <div style={colStyle}>
        <CourseDetails show={true} />
      </div>
      <div style={lineStyle} />
      <div style={colStyle}>
        <BookDetails show={true} />
      </div>
      <div style={lineStyle} />
      <div style={colStyle}>
        <BlogDetails show={true} />
      </div>
    </div>
  );
}

export default App;
