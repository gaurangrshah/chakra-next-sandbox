export const styles = {
  global: (props) => ({
    'html, body': {
      padding: 0,
    	margin: 0,
      height: '100%',
			fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
      fontSize: '16px',
    },
    ".page-wrap": {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none'
    },
    '*': {
      boxSizing: 'border-box'
    },
    header: {
      padding: '2rem 2rem',
      height: '100px',
      borderBottom: '1px solid #eaeaea',
    },
    main: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2rem 0',
    },
    footer: {
      height: '100px',
      padding: '1rem 0',
      borderTop: '1px solid #eaeaea',
      a: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }
    },
    code: {
      background: '#fafafa',
      borderRadius: '5px',
      padding: '0.75rem',
      fontSize: '1.1rem',
      fontFamily: `Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace`
    }
  })
}
