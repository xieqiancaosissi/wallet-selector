import { ModuleState, Wallet } from "@near-wallet-selector/core";
import { modalState } from "../modal";

export async function renderWalletAccount(
  module: ModuleState<Wallet> | null = null
) {
  let wallet: Wallet | null = null;
  if (module) {
    wallet = await module.wallet();
  }

  document.querySelector(".modal-right")!.innerHTML = `
    <div class="nws-modal-body">
    <div class="nws-modal-header">
        <div><span class="connected-flag">Connected</span></div>
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg"
              height="24" viewBox="0 0 24 24" width="24" fill="#C1C1C1">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
              </path>
          </svg>
        </button>
      </div>
      <div class="connecting-wrapper">
        <div class="content">
          <div class="icon"><img src="${wallet?.metadata.iconUrl}" alt="${wallet?.metadata.name}"></div>
          <h3 class="connecting-name">${wallet?.metadata.name}</h3>
        </div>
      </div>
    </div>
  `;

  document
    .getElementById("disconnect-button")
    ?.addEventListener("click", () => {
      if (!modalState) {
        return;
      }

      if (!wallet) {
        return;
      }

      wallet.signOut();
      modalState.container.children[0].classList.remove("open");
    });
}
