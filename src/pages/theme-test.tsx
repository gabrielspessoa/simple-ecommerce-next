import ThemeSwitcher from '@/components/ThemeSwitcher';
import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
`;

const PanelDarker = styled.div`
  aspect-ratio: 1;
  background-color: var(--color-bg-darker);
  padding: 48px;
  box-sizing: border-box;
  box-shadow: var(--shadow-elevation-high);
  border-radius: 12px;
  border: solid 1px var(--color-border-darker);
`;

const PanelDark = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px;
  background-color: var(--color-bg-dark);
  box-sizing: border-box;
  box-shadow: var(--shadow-elevation-high);
  border-radius: 12px;
  border: solid 1px var(--color-border-dark);
`;

const PanelNormal = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px;
  background-color: var(--color-bg);
  box-sizing: border-box;
  box-shadow: var(--shadow-elevation-high);
  border-radius: 12px;
  border: solid 1px var(--color-border);
`;

const PanelLight = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px;
  background-color: var(--color-bg-light);
  box-sizing: border-box;
  box-shadow: var(--shadow-elevation-high);
  border-radius: 12px;
  border: solid 1px var(--color-border-light);
`;

const PanelLighter = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px;
  background-color: var(--color-bg-lighter);
  box-sizing: border-box;
  box-shadow: var(--shadow-elevation-high);
  border-radius: 12px;
  border: solid 1px var(--color-border-lighter);
`;

const ThemeTest = () => {
  return (
    <>
      <ThemeSwitcher />
      <Container>
        <PanelDarker>
          <PanelDark>
            <PanelNormal>
              <PanelLight>
                <PanelLighter></PanelLighter>
              </PanelLight>
            </PanelNormal>
          </PanelDark>
        </PanelDarker>
      </Container>
    </>
  );
};

export default ThemeTest;
