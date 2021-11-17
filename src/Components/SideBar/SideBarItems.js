import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import InsightsIcon from '@mui/icons-material/Insights';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeleteIcon from '@mui/icons-material/Delete';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SoapIcon from '@mui/icons-material/Soap';

export const items = {
    overview: {
        value: "Overview",
        img: <InsightsIcon/>,
    },

    orders: {
        value: "Orders",
        img: <ShoppingCartIcon/>,
    },

    staff: {
        value: "Staff",
        img: <SupervisorAccountIcon/>
    },

    weight: {
        value: "Weight",
        img: <FitnessCenterIcon />,
    },

    giveaway: {
        value: "Give Away",
        img: <SoapIcon/>,
    },

    waste: {
        value: "Waste",
        img: <DeleteIcon />,
    },
};