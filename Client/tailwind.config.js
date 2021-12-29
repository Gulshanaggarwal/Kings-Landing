module.exports = {
    purge:false,
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage:{
          'main-image':"linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.8)),url('/src/Images/main_image.jpg')",
          'star-pattern':"url('/src/Images/starPattern2.svg')",
          'patternPad':"url('/src/Images/patternpad.svg')",
          'bgAbout':"url('/src/Images/bgAbout.svg')",
          "bgHostel":"linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.5)),url('/src/Images/bghostel.jpg')",
          "triangle":"url('/src/Images/triangle.svg')",
          
        },
        backgroundColor:{
          'sideNavWrapper':'rgba(0,0,0,0.8)',
          "black-transparent":"rgba(0,0,0,0.6)"

        },
        fontSize:{
          'headerLogoContent':'20px'
        },
        screens:{
          'after260px':{'min':'260px'},
          'HomePageAfter330px':{'min':'330px','max':'639px'},
         
        },
        width:{
          'sideNavwidth':'150px',
          'verticalLine':'0.5px',
          'aboutPage':'95%',
          '90P':'90%'
        }
        ,
        height:{
          imgPreview:"350px",
        },
        fontFamily:{
          "Roboto":["Roboto","sans-serif"],
          "RaviPrakash":["Ravi Prakash","cursive"],
          "Dosis":["Dosis","sans-serif"],
          "Metal_Mania":["Metal Mania","cursive"]
        },
        borderWidth:{
          "1":"1px"
        }
        
       
      },
    },
    variants: {
      extend: {
        transform:["hover"]
      },
    },
    plugins: [],
  }