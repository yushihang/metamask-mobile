import React from 'react';
import NetworkModal from './index';
import { render } from '@testing-library/react-native';
import { useSelector } from 'react-redux';
import { selectNetworkName } from '../../../selectors/networkInfos';
import { selectUseSafeChainsListValidation } from '../../../selectors/preferencesController';
interface NetworkProps {
  isVisible: boolean;
  onClose: () => void;
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  networkConfiguration: any;
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
  shouldNetworkSwitchPopToWallet: boolean;
  onNetworkSwitch?: () => void;
  showPopularNetworkModal: boolean;
}

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
describe('NetworkDetails', () => {
  const props: NetworkProps = {
    isVisible: true,
    onClose: () => ({}),
    networkConfiguration: {
      chainId: '1',
      nickname: 'Test Network',
      ticker: 'Test',
      rpcUrl: 'https://localhost:8545',
      formattedRpcUrl: 'https://localhost:8545',
      rpcPrefs: { blockExplorerUrl: 'https://test.com', imageUrl: 'image' },
    },
    navigation: 'navigation',
    shouldNetworkSwitchPopToWallet: true,
    showPopularNetworkModal: true,
  };
  it('renders correctly', () => {
    (useSelector as jest.MockedFn<typeof useSelector>).mockImplementation(
      (selector) => {
        if (selector === selectNetworkName) return 'Ethereum Main Network';
        if (selector === selectUseSafeChainsListValidation) return true;
      },
    );
    const { toJSON } = render(<NetworkModal {...props} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
