import type { ModalOptions } from "./lib/modal.types";
export { setupModal } from "./lib/modal";

export type {
  WalletSelectorModal,
  ModalOptions,
  Theme,
  ModalEvents,
} from "./lib/modal.types";

export function signInWithcontractId(option: ModalOptions, walletId: string) {
  if (option.blockFunctionKeyWallets) {
    if (option.blockFunctionKeyWallets.includes(walletId)) {
      return "";
    }
    return option.contractId;
  }
  return option.contractId;
}
