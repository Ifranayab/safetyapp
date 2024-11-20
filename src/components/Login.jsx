// import React, { useState } from 'react';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send form data to API)
//     console.log('Form data submitted:', formData);
//   };

//   // Inline styles
//   const styles = {
//     container: {
//       maxWidth: '400px',
//       margin: 'auto',
//       padding: '20px',
//       border: '1px solid #ccc',
//       borderRadius: '10px',
//       boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     },
//     header: {
//       textAlign: 'center',
//       marginBottom: '20px',
//     },
//     formGroup: {
//       marginBottom: '15px',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '5px',
//     },
//     input: {
//       width: '100%',
//       padding: '8px',
//       boxSizing: 'border-box',
//       border: '1px solid #ccc',
//       borderRadius: '4px',
//     },
//     button: {
//       width: '100%',
//       padding: '10px',
//       backgroundColor: '#f0c14b',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//       fontSize: '16px',
//     },
//     buttonHover: {
//       backgroundColor: '#e7b52d',
//     }
//   };

//   return (
//     <div style={styles.container} className='h-full '>
//       <h1 style={styles.header}>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div style={styles.formGroup}>
//           <label htmlFor="name" style={styles.label}>Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="email" style={styles.label}>Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="phone" style={styles.label}>Phone Number:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             style={styles.input}
//           />
//         </div>
//         <button type="submit" style={styles.button} onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Redirect to home page
    navigate('/');
  };

  // Inline styles
  const styles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f7f7f7',
    },
    container: {
      maxWidth: '400px',
      width: '100%',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#f0c14b',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#e7b52d',
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.header}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="phone" style={styles.label}>Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

