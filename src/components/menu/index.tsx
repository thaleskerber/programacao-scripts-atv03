import { useLocation, useNavigate } from 'react-router-dom';
import { LiSld, SelectedSld, TitleSld, UlSld, WrapperSld } from './styles';
import { megasenaTheme, quinaTheme, timemaniaTheme } from '../../styles/theme';

export function Menu() {

    const navigate = useNavigate();
    const location = useLocation().pathname;

    return (
        <WrapperSld>
            <UlSld>
                <LiSld onClick={() => navigate('/timemania')}>
                    {location === '/timemania' ? <SelectedSld>Timemania</SelectedSld> : <TitleSld color={timemaniaTheme.loteria}>Timemania</TitleSld>}
                </LiSld>
                <LiSld onClick={() => navigate('/megasena')}>
                    {location === '/megasena' ? <SelectedSld>Megasena</SelectedSld> : <TitleSld color={megasenaTheme.loteria}>Megasena</TitleSld>}
                </LiSld>
                <LiSld onClick={() => navigate('/quina')}>
                    {location === '/quina' ? <SelectedSld>Quina</SelectedSld> : <TitleSld color={quinaTheme.loteria}>Quina</TitleSld>}
                </LiSld>
            </UlSld>
        </WrapperSld>
    );
}
