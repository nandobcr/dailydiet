import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_600};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }: { theme: DefaultTheme }) => ({
    size: 'large',
    color: theme.COLORS.GRAY_100,
}))``;