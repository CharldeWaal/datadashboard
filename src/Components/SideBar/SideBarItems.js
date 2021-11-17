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
        img: <InsightsIcon className="page-img"/>,
    },

    orders: {
        value: "Orders",
        img: <ShoppingCartIcon className="page-img"/>,
    },

    staff: {
        value: "Staff",
        img: <SupervisorAccountIcon className="page-img"/>
    },

    weight: {
        value: "Weight",
        img: <FitnessCenterIcon className="page-img"/>,
    },

    giveaway: {
        value: "Give Away",
        img: <SoapIcon className="page-img"/>,
    },

    waste: {
        value: "Waste",
        img: <DeleteIcon className="page-img"/>,
    },
};