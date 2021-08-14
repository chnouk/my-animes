import { createTheme } from "@material-ui/core"
import { amber } from "@material-ui/core/colors"
import { grey } from "@material-ui/core/colors"

const appTheme = createTheme({

  palette: {
    type: 'dark',
    primary: {
      main: grey['800'],
    },
    secondary: {
      main: amber['900'],
    },
  },

})

export default appTheme