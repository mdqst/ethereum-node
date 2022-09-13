import { defineStore } from "pinia";
export const useServices = defineStore("services", {
  state: () => {
    return {
      network: "",
      installedServices: [],
      runningServices: [],
      allServices: [
        {
          id: 1,
          name: "Lighthouse",
          service: "LighthouseBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/lighthouse",
          linkUrl: "https://lighthouse-book.sigmaprime.io/",
          icon: require("../../public/img/icon/plugin-icons/consensus/LightHouse.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Lighthouse-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Slasher DB Size",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ram.png",
              pattern: new RegExp(/(- --slasher-max-db-size=)(\d+)(\n)/),
            },
            {
              title: "Resync",
              type: "action",
              action: "resyncronization",
              changeValue: null,
              displayResyncModal: false,
              icon: "/img/icon/plugin-menu-icons/resync.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 2,
          name: "Lighthouse",
          service: "LighthouseValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/lighthouse",
          linkUrl: "https://lighthouse-book.sigmaprime.io/",
          icon: require("../../public/img/icon/plugin-icons/validator/Lighthouse-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Lighthouse-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: new RegExp(/(- --suggested-fee-recipient=)(.*)(\n)/),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 3,
          name: "Prysm",
          service: "PrysmBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/prysm",
          linkUrl: "https://docs.prylabs.network/docs/getting-started/",
          icon: require("../../public/img/icon/plugin-icons/consensus/Prysm.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Prysm-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Resync",
              type: "action",
              action: "resyncronization",
              changeValue: null,
              displayResyncModal: false,
              icon: "/img/icon/plugin-menu-icons/resync.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 4,
          name: "Prysm",
          service: "PrysmValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/prysm",
          linkUrl: "https://docs.prylabs.network/docs/getting-started/",
          icon: require("../../public/img/icon/plugin-icons/validator/Prysm-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Prysm-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: new RegExp(/(--suggested-fee-recipient=)(.*)(\n)/),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 5,
          name: "Nimbus",
          service: "NimbusBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/nimbus",
          linkUrl: "https://nimbus.guide/",
          icon: require("../../public/img/icon/plugin-icons/consensus/Nimbus.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Nimbus-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: new RegExp(/(- --suggested-fee-recipient=)(.*)(\n)/),
            },
            {
              title: "Resync",
              type: "action",
              action: "resyncronization",
              changeValue: null,
              displayResyncModal: false,
              icon: "/img/icon/plugin-menu-icons/resync.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 6,
          name: "Nimbus",
          service: "NimbusValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/nimbus",
          linkUrl: "https://nimbus.guide/",
          icon: require("../../public/img/icon/plugin-icons/validator/Nimbus-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Nimbus-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: new RegExp(/(- --suggested-fee-recipient=)(.*)(\n)/),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 7,
          name: "Teku",
          service: "TekuBeaconService",
          category: "consensus",
          displayCategory: "csc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/teku",
          linkUrl: "https://docs.teku.consensys.net/en/latest/",
          icon: require("../../public/img/icon/plugin-icons/consensus/Teku.png"),
          sIcon: require("../../public/img/icon/plugin-icons/consensus/Teku-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "RAM Usage Limit",
              type: "select",
              value: [2, 4, 8, 16],
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ram.png",
              unit: "GB",
              pattern: new RegExp(/(JAVA_OPTS: -Xmx)(\d+)(g)/),
            },
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
            {
              title: "Resync",
              type: "action",
              action: "resyncronization",
              changeValue: null,
              displayResyncModal: false,
              icon: "/img/icon/plugin-menu-icons/resync.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 8,
          name: "Teku",
          service: "TekuValidatorService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          modifierPanel: false,
          path: "/teku",
          linkUrl: "https://docs.teku.consensys.net/en/latest/",
          icon: require("../../public/img/icon/plugin-icons/validator/Teku-Validator-Circle.png"),
          sIcon: require("../../public/img/icon/plugin-icons/validator/Teku-Validator-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          serviceIsPending: false,
          expertOptions: [
            {
              title: "RAM Usage Limit",
              type: "select",
              value: [2, 4, 8, 16],
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/ram.png",
              unit: "GB",
              pattern: new RegExp(/(JAVA_OPTS: -Xmx)(\d+)(g)/),
            },
            {
              title: "Default Fee Recipient",
              type: "text",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/fee.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 9,
          name: "ssv.network",
          service: "SSVNetworkService",
          category: "validator",
          displayCategory: "vlc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/ssv_network",
          icon: require("../../public/img/icon/plugin-icons/Other/ssv-network.png"),
          sIcon: require("../../public/img/icon/plugin-icons/Other/ssv-network-s.png"),
          hIcon: "/img/icon/service-icons/ssv.png",
          linkUrl: " https://docs.ssv.network/",
          headerOption: true,
          expertOptionsModal: false,
          expertOptions: [],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 10,
          name: "Prometheus",
          service: "PrometheusService",
          category: "service",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/prometheus",
          icon: require("../../public/img/icon/plugin-icons/Other/prometheus.png"),
          sIcon: require("../../public/img/icon/plugin-icons/Other/Prometheus-s.png"),
          hIcon: "/img/icon/service-icons/prometheus.png",
          linkUrl: "https://prometheus.io/docs/introduction/overview/",
          headerOption: true,
          expertOptionsModal: false,
          expertOptions: [],
          tunnelLink: true,
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 11,
          name: "Grafana",
          service: "GrafanaService",
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          category: "service",
          path: "/grafana",
          icon: "/img/icon/plugin-icons/Other/grafana-service.png",
          sIcon: "/img/icon/plugin-icons/Other/Grafana-s.png",
          hIcon: "/img/icon/service-icons/grafana.png",
          linkUrl: "https://grafana.com/docs/grafana/latest/",
          headerOption: true,
          expertOptionsModal: false,
          expertOptions: [],
          tunnelLink: true,
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 12,
          name: "Geth",
          service: "GethService",
          category: "execution",
          displayCategory: "exc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/geth",
          linkUrl: " https://geth.ethereum.org/docs/",
          icon: require("../..//public/img/icon/plugin-icons/execution/Geth.png"),
          sIcon: require("../../public/img/icon/plugin-icons/execution/Geth-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Prunning",
              type: "action",
              action: "prunning",
              changeValue: null,
              displayWarningModal: false,
              icon: "/img/icon/plugin-menu-icons/prunning.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
            {
              title: "Resync",
              type: "action",
              action: "resyncronization",
              changeValue: null,
              displayResyncModal: false,
              icon: "/img/icon/plugin-menu-icons/resync.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 13,
          name: "Besu",
          service: "BesuService",
          category: "execution",
          displayCategory: "exc",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          path: "/besu",
          linkUrl:
            " https://wiki.hyperledger.org/display/BESU/Hyperledger+Besu",
          icon: require("../..//public/img/icon/plugin-icons/execution/hyperLedger-besu.png"),
          sIcon: require("../../public/img/icon/plugin-icons/execution/HyperLedger-besu-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Prunning",
              type: "action",
              action: "prunning started",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/prunning.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
            {
              title: "Resync",
              type: "action",
              action: "resyncronization",
              changeValue: null,
              displayResyncModal: false,
              icon: "/img/icon/plugin-menu-icons/resync.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
        {
          id: 14,
          name: "Nethermind",
          service: "NethermindService",
          category: "execution",
          displayTooltip: false,
          displayPluginMenu: false,
          serviceIsPending: false,
          modifierPanel: false,
          displayCategory: "exc",
          path: "/nethermind",
          linkUrl: "  https://docs.nethermind.io/nethermind/",
          icon: require("../..//public/img/icon/plugin-icons/execution/Nethermind.png"),
          sIcon: require("../../public/img/icon/plugin-icons/execution/Nethermind-s.png"),
          headerOption: false,
          expertOptionsModal: false,
          expertOptions: [
            {
              title: "Prunning",
              type: "action",
              action: "prunning started",
              changeValue: null,
              icon: "/img/icon/plugin-menu-icons/prunning.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
            {
              title: "Resync",
              type: "action",
              action: "resyncronization",
              changeValue: null,
              displayResyncModal: false,
              icon: "/img/icon/plugin-menu-icons/resync.png",
              pattern: new RegExp(
                /(- --validators-proposer-default-fee-recipient=)(.*)(\n)/
              ),
            },
          ],
          drag: true,
          state: "exited",
          config: {
            serviceID: "",
            configVersion: "",
            image: "",
            imageVersion: "",
            ports: [],
            volumes: [],
            network: "",
          },
        },
      ],
      versions: {},
      stereumVersion: {},
      latestVersion: {},
      newUpdates: [],
    };
  },
  getters: {},
  actions: {},
});
