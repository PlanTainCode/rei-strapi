"use strict";
(self["webpackChunkcms"] = self["webpackChunkcms"] || []).push([[5162],{

/***/ 37948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Webhooks_EditView)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 28 modules
var hooks = __webpack_require__(78143);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(23998);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
;// CONCATENATED MODULE: ./node_modules/@strapi/icons/dist/Play.js
var m = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var n = (a, e, t) => e in a ? m(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, r = (a, e) => {
  for (var t in e || (e = {}))
    o.call(e, t) && n(a, t, e[t]);
  if (l)
    for (var t of l(e))
      w.call(e, t) && n(a, t, e[t]);
  return a;
};

function g(a) {
  return /* @__PURE__ */ react.createElement("svg", r({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, a), /* @__PURE__ */ react.createElement("path", {
    d: "M4 20.252V3.748a1 1 0 011.507-.862l14.028 8.252a1 1 0 010 1.724L5.507 21.113A1 1 0 014 20.252z",
    fill: "#212134"
  }));
}


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(67838);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(71893);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(41451);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Checkbox/Checkbox.js
var Checkbox = __webpack_require__(36213);
// EXTERNAL MODULE: ./node_modules/lodash/upperFirst.js
var upperFirst = __webpack_require__(11700);
var upperFirst_default = /*#__PURE__*/__webpack_require__.n(upperFirst);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/EventRow.js





const EventRow = ({ disabledEvents, name, events, inputValue, handleChange, handleChangeAll }) => {
  const enabledCheckboxes = events.filter((event) => {
    return !disabledEvents.includes(event);
  });
  const areAllCheckboxesSelected = inputValue.length === enabledCheckboxes.length;
  const hasSomeCheckboxSelected = inputValue.length > 0;
  const onChangeAll = ({ target: { name: name2 } }) => {
    const valueToSet = !areAllCheckboxesSelected;
    handleChangeAll({
      target: { name: name2, value: valueToSet }
    });
  };
  return /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement(Checkbox/* Checkbox */.X, {
    indeterminate: hasSomeCheckboxSelected && !areAllCheckboxesSelected,
    "aria-label": "Select all entries",
    name,
    onChange: onChangeAll,
    value: areAllCheckboxesSelected
  }, upperFirst_default()(name))), events.map((event) => {
    return /* @__PURE__ */ react.createElement("td", {
      key: event
    }, /* @__PURE__ */ react.createElement(BaseCheckbox/* BaseCheckbox */.C, {
      disabled: disabledEvents.includes(event),
      "aria-label": event,
      name: event,
      value: inputValue.includes(event),
      onValueChange: (value) => handleChange({ target: { name: event, value } })
    }));
  }));
};
EventRow.defaultProps = {
  disabledEvents: [],
  events: [],
  inputValue: [],
  handleChange() {
  },
  handleChangeAll() {
  }
};
EventRow.propTypes = {
  disabledEvents: (prop_types_default()).array,
  events: (prop_types_default()).array,
  inputValue: (prop_types_default()).array,
  handleChange: (prop_types_default()).func,
  handleChangeAll: (prop_types_default()).func,
  name: (prop_types_default()).string.isRequired
};
/* harmony default export */ const EventInput_EventRow = (EventRow);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/utils/formatValue.js
const formatValue = (value) => value.reduce((acc, curr) => {
  const key = curr.split(".")[0];
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(curr);
  return acc;
}, {});
/* harmony default export */ const utils_formatValue = (formatValue);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/EventInput/index.js










const StyledTable = styled_components_browser_esm["default"].table`
  td {
    height: ${52 / 16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({ theme }) => theme.spaces[7]};
  }
`;
const displayedData = {
  headers: {
    default: [
      { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
      { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
      { id: "app.utils.delete", defaultMessage: "Delete" }
    ],
    draftAndPublish: [
      { id: "Settings.webhooks.events.create", defaultMessage: "Create" },
      { id: "Settings.webhooks.events.update", defaultMessage: "Update" },
      { id: "app.utils.delete", defaultMessage: "Delete" },
      { id: "app.utils.publish", defaultMessage: "Publish" },
      { id: "app.utils.unpublish", defaultMessage: "Unpublish" }
    ]
  },
  events: {
    default: {
      entry: ["entry.create", "entry.update", "entry.delete"],
      media: ["media.create", "media.update", "media.delete"]
    },
    draftAndPublish: {
      entry: ["entry.create", "entry.update", "entry.delete", "entry.publish", "entry.unpublish"],
      media: ["media.create", "media.update", "media.delete"]
    }
  }
};
const EventInput = ({ isDraftAndPublish }) => {
  const headersName = isDraftAndPublish ? displayedData.headers.draftAndPublish : displayedData.headers.default;
  const events = isDraftAndPublish ? displayedData.events.draftAndPublish : displayedData.events.default;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, handleChange: onChange } = (0,dist.useFormikContext)();
  const inputName = "events";
  const inputValue = values.events;
  const disabledEvents = [];
  const formattedValue = utils_formatValue(inputValue);
  const handleChange = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      set.add(name);
    } else {
      set.delete(name);
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  const handleChangeAll = ({ target: { name, value } }) => {
    let set = new Set(inputValue);
    if (value) {
      events[name].forEach((event) => {
        if (!disabledEvents.includes(event)) {
          set.add(event);
        }
      });
    } else {
      events[name].forEach((event) => set.delete(event));
    }
    onChange({ target: { name: inputName, value: Array.from(set) } });
  };
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "Settings.webhooks.form.events",
    defaultMessage: "Events"
  })), /* @__PURE__ */ react.createElement(StyledTable, null, /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("td", null), headersName.map((header) => {
    if (header === "app.utils.publish" || header === "app.utils.unpublish") {
      return /* @__PURE__ */ react.createElement("td", {
        key: header.id,
        title: formatMessage({
          id: "Settings.webhooks.event.publish-tooltip",
          defaultMessage: "This event only exists for contents with Draft/Publish system enabled"
        })
      }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
        variant: "sigma",
        textColor: "neutral600"
      }, formatMessage(header)));
    }
    return /* @__PURE__ */ react.createElement("td", {
      key: header.id
    }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      variant: "sigma",
      textColor: "neutral600"
    }, formatMessage(header)));
  }))), /* @__PURE__ */ react.createElement("tbody", null, Object.keys(events).map((event) => {
    return /* @__PURE__ */ react.createElement(EventInput_EventRow, {
      disabledEvents,
      key: event,
      name: event,
      events: events[event],
      inputValue: formattedValue[event],
      handleChange,
      handleChangeAll
    });
  }))));
};
EventInput.propTypes = {
  isDraftAndPublish: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_EventInput = (EventInput);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js + 2 modules
var Combobox = __webpack_require__(31950);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/keys.js
const keys = [
  "A-IM",
  "Accept",
  "Accept-Charset",
  "Accept-Encoding",
  "Accept-Language",
  "Accept-Datetime",
  "Access-Control-Request-Method",
  "Access-Control-Request-Headers",
  "Authorization",
  "Cache-Control",
  "Connection",
  "Content-Length",
  "Content-Type",
  "Cookie",
  "Date",
  "Expect",
  "Forwarded",
  "From",
  "Host",
  "If-Match",
  "If-Modified-Since",
  "If-None-Match",
  "If-Range",
  "If-Unmodified-Since",
  "Max-Forwards",
  "Origin",
  "Pragma",
  "Proxy-Authorization",
  "Range",
  "Referer",
  "TE",
  "User-Agent",
  "Upgrade",
  "Via",
  "Warning"
];
/* harmony default export */ const HeadersInput_keys = (keys);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/Combobox.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const Combobox_Combobox = (_a) => {
  var _b = _a, { name, onChange, value } = _b, props = __objRest(_b, ["name", "onChange", "value"]);
  const [options, setOptions] = (0,react.useState)(value ? [...HeadersInput_keys, value] : HeadersInput_keys);
  const handleChange = (value2) => {
    onChange({ target: { name, value: value2 } });
  };
  const handleCreateOption = (value2) => {
    setOptions((prev) => [...prev, value2]);
    onChange({ target: { name, value: value2 } });
  };
  return /* @__PURE__ */ react.createElement(Combobox/* CreatableCombobox */.X, __spreadProps(__spreadValues({}, props), {
    onChange: handleChange,
    onCreateOption: handleCreateOption,
    placeholder: "",
    value
  }), options.map((key) => /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, {
    value: key,
    key
  }, key)));
};
Combobox_Combobox.defaultProps = {
  value: void 0
};
Combobox_Combobox.propTypes = {
  name: (prop_types_default()).string.isRequired,
  onChange: (prop_types_default()).func.isRequired,
  value: (prop_types_default()).string
};
/* harmony default export */ const HeadersInput_Combobox = (Combobox_Combobox);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/HeadersInput/index.js













const HeadersInput = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { values, errors } = (0,dist.useFormikContext)();
  return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: 1
  }, /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, null, formatMessage({
    id: "Settings.webhooks.form.headers",
    defaultMessage: "Headers"
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    padding: 8,
    background: "neutral100",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(dist.FieldArray, {
    validateOnChange: false,
    name: "headers",
    render: ({ push, remove }) => {
      var _a;
      return /* @__PURE__ */ react.createElement(Grid/* Grid */.r, {
        gap: 4
      }, (_a = values.headers) == null ? void 0 : _a.map((header, i) => {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        return /* @__PURE__ */ react.createElement(react.Fragment, {
          key: i
        }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, {
          col: 6
        }, /* @__PURE__ */ react.createElement(dist.Field, {
          as: HeadersInput_Combobox,
          name: `headers.${i}.key`,
          "aria-label": `row ${i + 1} key`,
          label: formatMessage({
            id: "Settings.webhooks.key",
            defaultMessage: "Key"
          }),
          error: ((_b = (_a2 = errors.headers) == null ? void 0 : _a2[i]) == null ? void 0 : _b.key) && formatMessage({
            id: (_c = errors.headers[i]) == null ? void 0 : _c.key,
            defaultMessage: (_d = errors.headers[i]) == null ? void 0 : _d.key
          })
        })), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, {
          col: 6
        }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
          alignItems: "flex-end"
        }, /* @__PURE__ */ react.createElement(Box/* Box */.x, {
          style: { flex: 1 }
        }, /* @__PURE__ */ react.createElement(dist.Field, {
          as: TextInput/* TextInput */.o,
          "aria-label": `row ${i + 1} value`,
          label: formatMessage({
            id: "Settings.webhooks.value",
            defaultMessage: "Value"
          }),
          name: `headers.${i}.value`,
          error: ((_f = (_e = errors.headers) == null ? void 0 : _e[i]) == null ? void 0 : _f.value) && formatMessage({
            id: (_g = errors.headers[i]) == null ? void 0 : _g.value,
            defaultMessage: (_h = errors.headers[i]) == null ? void 0 : _h.value
          })
        })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
          paddingLeft: 2,
          style: { alignSelf: "center" },
          paddingTop: ((_j = (_i = errors.headers) == null ? void 0 : _i[i]) == null ? void 0 : _j.value) ? 0 : 5
        }, /* @__PURE__ */ react.createElement(build.RemoveRoundedButton, {
          onClick: () => values.headers.length !== 1 && remove(i),
          label: formatMessage(
            {
              id: "Settings.webhooks.headers.remove",
              defaultMessage: "Remove header row {number}"
            },
            { number: i + 1 }
          )
        })))));
      }), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, {
        col: 12
      }, /* @__PURE__ */ react.createElement(TextButton/* TextButton */.A, {
        type: "button",
        onClick: () => {
          push({ key: "", value: "" });
        },
        startIcon: /* @__PURE__ */ react.createElement(Plus["default"], null)
      }, formatMessage({
        id: "Settings.webhooks.create.header",
        defaultMessage: "Create new header"
      }))));
    }
  })));
};
/* harmony default export */ const components_HeadersInput = (HeadersInput);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Loader.js
var Loader = __webpack_require__(86647);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/TriggerContainer/index.js













const Icon = styled_components_browser_esm["default"].svg(
  ({ theme, color }) => `
  width: ${12 / 16}rem;
  height: ${12 / 16}rem;

  path {
    fill: ${theme.colors[color]};
  }
`
);
const Status = ({ isPending, statusCode }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (isPending) {
    return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
      horizontal: true,
      spacing: 2,
      style: { alignItems: "center" }
    }, /* @__PURE__ */ react.createElement(Icon, {
      as: Loader["default"]
    }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.webhooks.trigger.pending", defaultMessage: "pending" })));
  }
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
      horizontal: true,
      spacing: 2,
      style: { alignItems: "center" }
    }, /* @__PURE__ */ react.createElement(Icon, {
      as: Check/* default */.Z,
      color: "success700"
    }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.webhooks.trigger.success", defaultMessage: "success" })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
      horizontal: true,
      spacing: 2,
      style: { alignItems: "center" }
    }, /* @__PURE__ */ react.createElement(Icon, {
      as: Cross["default"],
      color: "danger700"
    }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({ id: "Settings.error", defaultMessage: "error" }), " ", statusCode));
  }
  return null;
};
Status.propTypes = {
  isPending: (prop_types_default()).bool.isRequired,
  statusCode: (prop_types_default()).number
};
Status.defaultProps = {
  statusCode: void 0
};
const Message = ({ statusCode, message }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  if (statusCode >= 200 && statusCode < 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "flex-end"
    }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      textColor: "neutral600",
      ellipsis: true
    }, formatMessage({
      id: "Settings.webhooks.trigger.success.label",
      defaultMessage: "Trigger succeeded"
    })));
  }
  if (statusCode >= 300) {
    return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      justifyContent: "flex-end"
    }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
      maxWidth: (0,build.pxToRem)(250),
      justifyContent: "flex-end",
      title: message
    }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
      ellipsis: true,
      textColor: "neutral600"
    }, message)));
  }
  return null;
};
Message.propTypes = {
  statusCode: (prop_types_default()).number,
  message: (prop_types_default()).string
};
Message.defaultProps = {
  statusCode: void 0,
  message: void 0
};
const CancelButton = ({ onCancel }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "flex-end"
  }, /* @__PURE__ */ react.createElement("button", {
    onClick: onCancel,
    type: "button"
  }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    horizontal: true,
    spacing: 2,
    style: { alignItems: "center" }
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    textColor: "neutral400"
  }, formatMessage({ id: "Settings.webhooks.trigger.cancel", defaultMessage: "cancel" })), /* @__PURE__ */ react.createElement(Icon, {
    as: Cross["default"],
    color: "neutral400"
  }))));
};
CancelButton.propTypes = { onCancel: (prop_types_default()).func.isRequired };
const TriggerContainer = ({ isPending, onCancel, response }) => {
  const { statusCode, message } = response;
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    background: "neutral0",
    padding: 5,
    shadow: "filterShadow",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, {
    gap: 4,
    style: { alignItems: "center" }
  }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, {
    col: 3
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, formatMessage({
    id: "Settings.webhooks.trigger.test",
    defaultMessage: "Test-trigger"
  }))), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, {
    col: 3
  }, /* @__PURE__ */ react.createElement(Status, {
    isPending,
    statusCode
  })), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, {
    col: 6
  }, !isPending ? /* @__PURE__ */ react.createElement(Message, {
    statusCode,
    message
  }) : /* @__PURE__ */ react.createElement(CancelButton, {
    onCancel
  }))));
};
TriggerContainer.defaultProps = {
  isPending: false,
  onCancel() {
  },
  response: {}
};
TriggerContainer.propTypes = {
  isPending: (prop_types_default()).bool,
  onCancel: (prop_types_default()).func,
  response: (prop_types_default()).object
};
/* harmony default export */ const components_TriggerContainer = (TriggerContainer);

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/fieldsRegex.js
const NAME_REGEX = /(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/;
const URL_REGEX = /(^$)|((https?:\/\/.*)(d*)\/?(.*))/;


;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/utils/schema.js



const schema = yup_lib/* object */.Ry().shape({
  name: yup_lib/* string */.Z_(build.translatedErrors.string).required(build.translatedErrors.required).matches(NAME_REGEX, build.translatedErrors.regex),
  url: yup_lib/* string */.Z_(build.translatedErrors.string).required(build.translatedErrors.required).matches(URL_REGEX, build.translatedErrors.regex),
  headers: yup_lib/* lazy */.Vo((array) => {
    let baseSchema = yup_lib/* array */.IX();
    if (array.length === 1) {
      const { key, value } = array[0];
      if (!key && !value) {
        return baseSchema;
      }
    }
    return baseSchema.of(
      yup_lib/* object */.Ry().shape({
        key: yup_lib/* string */.Z_().required(build.translatedErrors.required),
        value: yup_lib/* string */.Z_().required(build.translatedErrors.required)
      })
    );
  }),
  events: yup_lib/* array */.IX()
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/components/WebhookForm/index.js


















const WebhookForm = ({
  handleSubmit,
  data,
  triggerWebhook,
  isCreating,
  isTriggering,
  triggerResponse,
  isDraftAndPublishEvents
}) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const [showTriggerResponse, setShowTriggerResponse] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(dist.Formik, {
    onSubmit: handleSubmit,
    initialValues: {
      name: (data == null ? void 0 : data.name) || "",
      url: (data == null ? void 0 : data.url) || "",
      headers: Object.keys((data == null ? void 0 : data.headers) || []).length ? Object.entries(data.headers).map(([key, value]) => ({ key, value })) : [{ key: "", value: "" }],
      events: (data == null ? void 0 : data.events) || []
    },
    validationSchema: utils_schema,
    validateOnChange: false,
    validateOnBlur: false
  }, ({ handleSubmit: handleSubmit2, errors }) => /* @__PURE__ */ react.createElement(build.Form, {
    noValidate: true
  }, /* @__PURE__ */ react.createElement(HeaderLayout/* HeaderLayout */.T, {
    primaryAction: /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
      horizontal: true,
      spacing: 2
    }, /* @__PURE__ */ react.createElement(Button/* Button */.z, {
      onClick: () => {
        triggerWebhook();
        setShowTriggerResponse(true);
      },
      variant: "tertiary",
      startIcon: /* @__PURE__ */ react.createElement(g, null),
      disabled: isCreating || isTriggering,
      size: "L"
    }, formatMessage({
      id: "Settings.webhooks.trigger",
      defaultMessage: "Trigger"
    })), /* @__PURE__ */ react.createElement(Button/* Button */.z, {
      startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
      onClick: handleSubmit2,
      type: "submit",
      size: "L"
    }, formatMessage({
      id: "global.save",
      defaultMessage: "Save"
    }))),
    title: isCreating ? formatMessage({
      id: "Settings.webhooks.create",
      defaultMessage: "Create a webhook"
    }) : data == null ? void 0 : data.name,
    navigationAction: /* @__PURE__ */ react.createElement(build.Link, {
      startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null),
      to: "/settings/webhooks"
    }, formatMessage({
      id: "global.back",
      defaultMessage: "Back"
    }))
  }), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: 4
  }, showTriggerResponse && /* @__PURE__ */ react.createElement("div", {
    className: "trigger-wrapper"
  }, /* @__PURE__ */ react.createElement(components_TriggerContainer, {
    isPending: isTriggering,
    response: triggerResponse,
    onCancel: () => setShowTriggerResponse(false)
  })), /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    background: "neutral0",
    padding: 8,
    shadow: "filterShadow",
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: 6
  }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, {
    gap: 6
  }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, {
    col: 6
  }, /* @__PURE__ */ react.createElement(dist.Field, {
    as: TextInput/* TextInput */.o,
    name: "name",
    error: errors.name && formatMessage({ id: errors.name }),
    label: formatMessage({
      id: "global.name",
      defaultMessage: "Name"
    }),
    required: true
  })), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, {
    col: 12
  }, /* @__PURE__ */ react.createElement(dist.Field, {
    as: TextInput/* TextInput */.o,
    name: "url",
    error: errors.url && formatMessage({ id: errors.url }),
    label: formatMessage({
      id: "Settings.roles.form.input.url",
      defaultMessage: "Url"
    }),
    required: true
  }))), /* @__PURE__ */ react.createElement(components_HeadersInput, null), /* @__PURE__ */ react.createElement(components_EventInput, {
    isDraftAndPublish: isDraftAndPublishEvents
  })))))));
};
WebhookForm.propTypes = {
  data: (prop_types_default()).object,
  handleSubmit: (prop_types_default()).func.isRequired,
  triggerWebhook: (prop_types_default()).func.isRequired,
  isCreating: (prop_types_default()).bool.isRequired,
  isDraftAndPublishEvents: (prop_types_default()).bool.isRequired,
  isTriggering: (prop_types_default()).bool.isRequired,
  triggerResponse: (prop_types_default()).object
};
WebhookForm.defaultProps = {
  data: void 0,
  triggerResponse: void 0
};
/* harmony default export */ const components_WebhookForm = (WebhookForm);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/utils/formatData.js
var formatData_defProp = Object.defineProperty;
var formatData_defProps = Object.defineProperties;
var formatData_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var formatData_getOwnPropSymbols = Object.getOwnPropertySymbols;
var formatData_hasOwnProp = Object.prototype.hasOwnProperty;
var formatData_propIsEnum = Object.prototype.propertyIsEnumerable;
var formatData_defNormalProp = (obj, key, value) => key in obj ? formatData_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var formatData_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (formatData_hasOwnProp.call(b, prop))
      formatData_defNormalProp(a, prop, b[prop]);
  if (formatData_getOwnPropSymbols)
    for (var prop of formatData_getOwnPropSymbols(b)) {
      if (formatData_propIsEnum.call(b, prop))
        formatData_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var formatData_spreadProps = (a, b) => formatData_defProps(a, formatData_getOwnPropDescs(b));

const cleanData = (data) => {
  const webhooks = formatData_spreadValues({}, data);
  (0,lodash.set)(webhooks, "headers", unformatHeaders(data.headers));
  return webhooks;
};
const unformatHeaders = (headers) => {
  return headers.reduce((acc, current) => {
    const { key, value } = current;
    if (key !== "") {
      return formatData_spreadProps(formatData_spreadValues({}, acc), {
        [key]: value
      });
    }
    return acc;
  }, {});
};
/* harmony default export */ const formatData = (cleanData);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/SettingsPage/pages/Webhooks/EditView/index.js
/* provided dependency */ var console = __webpack_require__(25108);
var EditView_defProp = Object.defineProperty;
var EditView_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EditView_hasOwnProp = Object.prototype.hasOwnProperty;
var EditView_propIsEnum = Object.prototype.propertyIsEnumerable;
var EditView_defNormalProp = (obj, key, value) => key in obj ? EditView_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EditView_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EditView_hasOwnProp.call(b, prop))
      EditView_defNormalProp(a, prop, b[prop]);
  if (EditView_getOwnPropSymbols)
    for (var prop of EditView_getOwnPropSymbols(b)) {
      if (EditView_propIsEnum.call(b, prop))
        EditView_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};









const EditView = () => {
  const {
    params: { id }
  } = (0,react_router_dom_min.useRouteMatch)("/settings/webhooks/:id");
  const { replace } = (0,react_router_dom_min.useHistory)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const toggleNotification = (0,build.useNotification)();
  const queryClient = (0,lib.useQueryClient)();
  const { isLoading: isLoadingForModels, collectionTypes } = (0,hooks/* useModels */.bP)();
  const isCreating = id === "create";
  const fetchWebhook = (0,react.useCallback)(
    (id2) => __async(void 0, null, function* () {
      const [err, { data: data2 }] = yield (0,build.to)(
        (0,build.request)(`/admin/webhooks/${id2}`, {
          method: "GET"
        })
      );
      if (err) {
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
        return null;
      }
      return data2;
    }),
    [toggleNotification]
  );
  const { isLoading, data } = (0,lib.useQuery)(["get-webhook", id], () => fetchWebhook(id), {
    enabled: !isCreating
  });
  const {
    isLoading: isTriggering,
    data: triggerResponse,
    isIdle: isTriggerIdle,
    mutate
  } = (0,lib.useMutation)(() => utils/* axiosInstance.post */.be.post(`/admin/webhooks/${id}/trigger`));
  const triggerWebhook = () => mutate(null, {
    onError() {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  const createWebhookMutation = (0,lib.useMutation)(
    (body) => (0,build.request)("/admin/webhooks", {
      method: "POST",
      body
    })
  );
  const updateWebhookMutation = (0,lib.useMutation)(
    ({ id: id2, body }) => (0,build.request)(`/admin/webhooks/${id2}`, {
      method: "PUT",
      body
    })
  );
  const handleSubmit = (data2) => __async(void 0, null, function* () {
    if (isCreating) {
      lockApp();
      createWebhookMutation.mutate(formatData(data2), {
        onSuccess(result) {
          toggleNotification({
            type: "success",
            message: { id: "Settings.webhooks.created" }
          });
          replace(`/settings/webhooks/${result.data.id}`);
          unlockApp();
        },
        onError(e) {
          toggleNotification({
            type: "warning",
            message: { id: "notification.error" }
          });
          console.log(e);
          unlockApp();
        }
      });
    } else {
      lockApp();
      updateWebhookMutation.mutate(
        { id, body: formatData(data2) },
        {
          onSuccess() {
            queryClient.invalidateQueries(["get-webhook", id]);
            toggleNotification({
              type: "success",
              message: { id: "notification.form.success.fields" }
            });
            unlockApp();
          },
          onError(e) {
            toggleNotification({
              type: "warning",
              message: { id: "notification.error" }
            });
            console.log(e);
            unlockApp();
          }
        }
      );
    }
  });
  const isDraftAndPublishEvents = (0,react.useMemo)(
    () => collectionTypes.some((ct) => ct.options.draftAndPublish === true),
    [collectionTypes]
  );
  if (isLoading || isLoadingForModels) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: "Webhooks"
  }), /* @__PURE__ */ react.createElement(components_WebhookForm, EditView_spreadValues({}, {
    handleSubmit,
    data,
    triggerWebhook,
    isCreating,
    isTriggering,
    isTriggerIdle,
    triggerResponse: triggerResponse == null ? void 0 : triggerResponse.data.data,
    isDraftAndPublishEvents
  })));
};
/* harmony default export */ const Webhooks_EditView = (EditView);


/***/ }),

/***/ 3672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37948);




const ProtectedCreateView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, {
  permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.webhooks.create */ .Z.settings.webhooks.create
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedCreateView);


/***/ }),

/***/ 9311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68547);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87751);
/* harmony import */ var _EditView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37948);




const ProtectedEditView = () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.CheckPagePermissions, {
  permissions: _permissions__WEBPACK_IMPORTED_MODULE_2__/* ["default"].settings.webhooks.update */ .Z.settings.webhooks.update
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedEditView);


/***/ }),

/***/ 31950:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ $),
  "X": () => (/* binding */ oe)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/useId.js + 1 modules
var useId = __webpack_require__(41762);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Cross.js
var Cross = __webpack_require__(70968);
// EXTERNAL MODULE: ./node_modules/compute-scroll-into-view/dist/index.js
var dist = __webpack_require__(41207);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/helpers/keyboardKeys.js
var keyboardKeys = __webpack_require__(7801);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/utils.js


const utils_t = {
  Close: "Close",
  CloseSelect: "CloseSelect",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  PageDown: "PageDown",
  PageUp: "PageUp",
  Previous: "Previous",
  Select: "Select",
  Space: "Space",
  Type: "Type"
}, f = {
  Close: "Close",
  First: "First",
  Last: "Last",
  Next: "Next",
  Open: "Open",
  Previous: "Previous",
  Select: "Select",
  UpLevel: "UpLevel"
};
function utils_d(e = [], r, n = []) {
  const o = String(r != null ? r : "").toLowerCase();
  return o ? e.filter((i) => i.props.children.toString().toLowerCase().includes(o) && n.indexOf(i) < 0) : e;
}
function C(e, r) {
  if (!r && e === keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN)
    return utils_t.Open;
  if (e === keyboardKeys/* KeyboardKeys.DOWN */.y.DOWN)
    return utils_t.Next;
  if (e === keyboardKeys/* KeyboardKeys.UP */.y.UP)
    return utils_t.Previous;
  if (e === keyboardKeys/* KeyboardKeys.HOME */.y.HOME)
    return utils_t.First;
  if (e === keyboardKeys/* KeyboardKeys.END */.y.END)
    return utils_t.Last;
  if (e === keyboardKeys/* KeyboardKeys.ESCAPE */.y.ESCAPE)
    return utils_t.Close;
  if (e === keyboardKeys/* KeyboardKeys.ENTER */.y.ENTER)
    return utils_t.CloseSelect;
  if (e === keyboardKeys/* KeyboardKeys.BACKSPACE */.y.BACKSPACE || e === keyboardKeys/* KeyboardKeys.CLEAR */.y.CLEAR || e.length === 1)
    return utils_t.Type;
}
function utils_S(e, r, n) {
  switch (n) {
    case utils_t.First:
      return 0;
    case utils_t.Last:
      return r;
    case utils_t.Previous:
      return Math.max(0, e - 1);
    case utils_t.Next:
      return Math.min(r, e + 1);
    default:
      return e;
  }
}
function utils_P(e) {
  dist(e, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  }).forEach(({ el: n, top: o, left: i }) => {
    n.scrollTop = o, n.scrollLeft = i;
  });
}


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js + 1 modules
var Flex = __webpack_require__(46273);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Select/components.js
var components = __webpack_require__(81318);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(88533);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js + 1 modules
var Box = __webpack_require__(35961);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 3 modules
var Typography = __webpack_require__(72735);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/components.js
var Combobox_components = __webpack_require__(74020);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxOption.js
var ComboboxOption = __webpack_require__(90608);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/ComboboxList.js



const ComboboxList_o = ({ options: i, activeOptionRef: r }) => ((0,react.useEffect)(() => {
  r.current && utils_P(r.current);
}, []), i);
ComboboxList_o.defaultProps = {
  activeOptionRef: void 0
};
ComboboxList_o.propTypes = {
  options: prop_types.array.isRequired
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/Field.js
var Field = __webpack_require__(54574);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldLabel.js
var FieldLabel = __webpack_require__(64777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldHint.js
var FieldHint = __webpack_require__(63428);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Field/FieldError.js
var FieldError = __webpack_require__(96404);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Stack/Stack.js
var Stack = __webpack_require__(7681);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Combobox/Combobox.js
var we = Object.defineProperty, $e = Object.defineProperties;
var ke = Object.getOwnPropertyDescriptors;
var w = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable;
var W = (o, i, a) => i in o ? we(o, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[i] = a, D = (o, i) => {
  for (var a in i || (i = {}))
    G.call(i, a) && W(o, a, i[a]);
  if (w)
    for (var a of w(i))
      J.call(i, a) && W(o, a, i[a]);
  return o;
}, F = (o, i) => $e(o, ke(i));
var Q = (o, i) => {
  var a = {};
  for (var p in o)
    G.call(o, p) && i.indexOf(p) < 0 && (a[p] = o[p]);
  if (o != null && w)
    for (var p of w(o))
      i.indexOf(p) < 0 && J.call(o, p) && (a[p] = o[p]);
  return a;
};

























const $ = (tt) => {
  var P = tt, {
    children: o,
    clearLabel: i,
    creatable: a,
    createMessage: p,
    disabled: f,
    error: k,
    hasMoreItems: re,
    hint: A,
    label: h,
    labelAction: ne,
    loading: B,
    loadingMessage: ae,
    noOptionsMessage: ie,
    onChange: V,
    onClear: K,
    onCreateOption: le,
    onInputChange: N,
    onLoadMore: se,
    placeholder: ce,
    required: pe,
    value: m
  } = P, ue = Q(P, [
    "children",
    "clearLabel",
    "creatable",
    "createMessage",
    "disabled",
    "error",
    "hasMoreItems",
    "hint",
    "label",
    "labelAction",
    "loading",
    "loadingMessage",
    "noOptionsMessage",
    "onChange",
    "onClear",
    "onCreateOption",
    "onInputChange",
    "onLoadMore",
    "placeholder",
    "required",
    "value"
  ]);
  const de = () => {
    var t;
    return (t = o.find((n) => {
      var l;
      return ((l = n.props) == null ? void 0 : l.value.toLowerCase()) === m.toLowerCase();
    }).props) == null ? void 0 : t.children;
  }, [c, q] = (0,react.useState)(0), [fe, me] = (0,react.useState)(null), [d, H] = (0,react.useState)(o), [E, ge] = (0,react.useState)(!1), [s, M] = (0,react.useState)(""), x = (0,react.useRef)(), L = (0,react.useRef)(!1), I = (0,react.useRef)(), U = (0,react.useRef)(), be = (0,react.useRef)(), _ = (0,react.useRef)(!0), u = (0,useId/* useId */.M)("combobox"), R = `${u}-label`;
  if (!h && !ue["aria-label"])
    throw new Error('The Combobox component needs a "label" or an "aria-label" props');
  (0,react.useEffect)(() => {
    H(utils_d(o, s));
  }, [s, o]), (0,react.useEffect)(() => {
    E && x.current && utils_P(x.current);
  }, [c]), (0,react.useLayoutEffect)(() => {
    if (_.current) {
      _.current = !1;
      return;
    }
  }, [m]);
  const Ce = E ? `${u}-${c}` : "", j = () => {
    V(null), M("");
  }, he = (t) => {
    N && N(t);
    const n = I.current.value;
    H(utils_d(o, n)), q(0), me(null), s !== n && M(n), E || g(!0, !1);
  }, Ee = (t) => {
    const { key: n } = t, l = a && s ? d.length : d.length - 1, v = C(n, E);
    switch (m && !s && n === keyboardKeys/* KeyboardKeys.BACKSPACE */.y.BACKSPACE && j(), v) {
      case utils_t.Next:
        return b(c === l ? 0 : utils_S(c, l, v));
      case utils_t.Previous:
        return b(c === 0 ? l : utils_S(c, l, v));
      case utils_t.Last:
      case utils_t.First:
        return b(c === l ? 0 : utils_S(c, l, v));
      case utils_t.CloseSelect:
        t.preventDefault(), S(c);
        return;
      case utils_t.Close:
        return t.preventDefault(), g(!1);
      case utils_t.Open:
        return g(!0);
      default:
        return;
    }
  }, xe = (t) => {
    if (t.preventDefault(), m && !L.current && M(""), L.current) {
      L.current = !1;
      return;
    }
    g(!1, !1);
  }, b = (t) => {
    q(t);
  }, ve = (t) => {
    b(t), S(t);
  }, z = () => {
    L.current = !0;
  }, S = (t) => {
    const n = d[t];
    if (M(""), n)
      return V(n.props.value), g(!1);
    a && (le(s), g(!1));
  }, g = (t, n = !0) => {
    ge(t), n && I.current.focus();
  }, ye = react.Children.toArray(d).map((t, n) => {
    const l = c === n;
    return (0,react.cloneElement)(t, {
      id: `${u}-${n}`,
      "aria-selected": fe === n,
      "aria-posinset": n + 1,
      "aria-setsize": react.Children.toArray(d).length,
      ref: (v) => {
        l && (x.current = v);
      },
      onClick: () => ve(n),
      onMouseDown: z,
      isSelected: l
    });
  }), Ie = () => {
    I.current.focus(), K && K(), j();
  }, Oe = () => {
    I.current.focus(), g(!0);
  }, Me = () => {
    const t = d.findIndex((n) => {
      var l;
      return ((l = n.props) == null ? void 0 : l.children) === s;
    });
    return s && t === -1;
  }, Le = (t) => {
    t.preventDefault(), g(t, !0);
  };
  return /* @__PURE__ */ react.createElement(Field/* Field */.g, {
    hint: A,
    error: k,
    id: u
  }, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, {
    "aria-live": "polite",
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, m), /* @__PURE__ */ react.createElement(Stack/* Stack */.K, {
    spacing: h || A || k ? 1 : 0
  }, h && /* @__PURE__ */ react.createElement(FieldLabel/* FieldLabel */.Q, {
    action: ne,
    required: pe,
    id: R
  }, h), /* @__PURE__ */ react.createElement(Combobox_components/* MainRow */.d8, {
    ref: U,
    $disabled: f,
    hasError: k
  }, /* @__PURE__ */ react.createElement(Combobox_components/* InputContainer */.fv, {
    wrap: "wrap"
  }, !s && m && /* @__PURE__ */ react.createElement(Combobox_components/* ValueContainer */.K7, {
    id: `${u}-selected-value`
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, null, de())), /* @__PURE__ */ react.createElement(Combobox_components/* Input */.II, {
    "aria-activedescendant": Ce,
    "aria-autocomplete": "list",
    "aria-controls": `${u}-listbox`,
    "aria-disabled": f,
    "aria-expanded": E,
    "aria-haspopup": "listbox",
    "aria-labelledby": h ? R : void 0,
    id: u,
    onBlur: f ? void 0 : xe,
    onClick: f ? void 0 : Le,
    onInput: f ? void 0 : he,
    onKeyDown: f ? void 0 : Ee,
    placeholder: m ? "" : ce,
    readOnly: f,
    ref: I,
    role: "combobox",
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: "off",
    type: "text",
    value: s
  })), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, (m || s) && /* @__PURE__ */ react.createElement(components/* IconBox */.zb, {
    id: `${u}-clear`,
    "aria-label": i,
    disabled: f,
    paddingLeft: 3,
    as: "button",
    onClick: Ie,
    type: "button"
  }, /* @__PURE__ */ react.createElement(Cross["default"], null)), /* @__PURE__ */ react.createElement(components/* CaretBox */.AV, {
    disabled: f,
    paddingLeft: 3,
    "aria-hidden": !0,
    as: "button",
    onClick: Oe,
    tabIndex: -1,
    type: "button"
  }, /* @__PURE__ */ react.createElement(CarretDown["default"], null)))), /* @__PURE__ */ react.createElement(FieldHint/* FieldHint */.J, null), /* @__PURE__ */ react.createElement(FieldError/* FieldError */.c, null)), E && /* @__PURE__ */ react.createElement(Popover/* Popover */.J, {
    id: `${u}-popover`,
    source: U,
    spacing: 4,
    fullWidth: !0,
    intersectionId: `${u}-listbox-popover-intersection`,
    onReachEnd: re && !B ? se : void 0
  }, /* @__PURE__ */ react.createElement("div", {
    role: "listbox",
    ref: be,
    id: `${u}-listbox`,
    "aria-labelledby": h ? R : void 0
  }, (Boolean(d.length) || a) && /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(ComboboxList_o, {
    activeOptionRef: x,
    options: ye
  }), Me() && a && /* @__PURE__ */ react.createElement(ComboboxOption/* ComboboxOption */.O, {
    isSelected: c === d.length,
    ref: (t) => {
      c === d.length && (x.current = t);
    },
    onMouseDown: z,
    onClick: () => S(),
    taindex: 0
  }, p(s))), !Boolean(d.length) && !a && !B && /* @__PURE__ */ react.createElement(Box/* Box */.x, {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    ref: x
  }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, {
    textColor: "neutral800"
  }, ie(s))), B && /* @__PURE__ */ react.createElement(Flex/* Flex */.k, {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2,
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, {
    small: !0
  }, ae)))));
}, oe = (o) => /* @__PURE__ */ react.createElement($, F(D({}, o), {
  creatable: !0
}));
$.defaultProps = oe.defaultProps = {
  "aria-label": void 0,
  clearLabel: "clear",
  creatable: !1,
  createMessage: (o) => `Create "${o}"`,
  disabled: !1,
  error: void 0,
  hasMoreItems: !1,
  hint: void 0,
  label: void 0,
  loading: !1,
  loadingMessage: "Loading content...",
  noOptionsMessage: () => "No results found",
  onClear: void 0,
  onCreateOption: void 0,
  onInputChange: void 0,
  onLoadMore: void 0,
  placeholder: "Select or enter a value",
  value: void 0
};
$.propTypes = {
  "aria-label": prop_types.string,
  children: prop_types.oneOfType([prop_types.arrayOf(prop_types.node), prop_types.node]),
  clearLabel: prop_types.string,
  creatable: prop_types.bool,
  createMessage: prop_types.func,
  disabled: prop_types.bool,
  error: prop_types.string,
  hasMoreItems: prop_types.bool,
  hint: prop_types.oneOfType([prop_types.string, prop_types.node, prop_types.arrayOf(prop_types.node)]),
  label: prop_types.string,
  labelAction: prop_types.element,
  loading: prop_types.bool,
  loadingMessage: prop_types.string,
  noOptionsMessage: prop_types.func,
  onChange: prop_types.func.isRequired,
  onClear: prop_types.func,
  onCreateOption: prop_types.func,
  onInputChange: prop_types.func,
  onLoadMore: prop_types.func,
  placeholder: prop_types.string,
  value: prop_types.string
};
oe.propTypes = F(D({}, $.propTypes), {
  onCreateOption: prop_types.func.isRequired
});



/***/ }),

/***/ 90608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72735);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74020);
var g = Object.defineProperty;
var p = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var d = (o, r, e) => r in o ? g(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e, f = (o, r) => {
  for (var e in r || (r = {}))
    m.call(r, e) && d(o, e, r[e]);
  if (p)
    for (var e of p(r))
      l.call(r, e) && d(o, e, r[e]);
  return o;
};
var u = (o, r) => {
  var e = {};
  for (var t in o)
    m.call(o, t) && r.indexOf(t) < 0 && (e[t] = o[t]);
  if (o != null && p)
    for (var t of p(o))
      r.indexOf(t) < 0 && l.call(o, t) && (e[t] = o[t]);
  return e;
};




const n = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((h, t) => {
  var a = h, { isSelected: o, children: r } = a, e = u(a, ["isSelected", "children"]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_js__WEBPACK_IMPORTED_MODULE_1__/* .OptionBox */ .Zq, f({
    hasRadius: !0,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 2,
    paddingBottom: 2,
    role: "option",
    background: "neutral0",
    isSelected: o,
    ref: t
  }, e), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_2__/* .Typography */ .Z, {
    textColor: o ? "primary600" : "neutral800",
    fontWeight: o ? "bold" : null
  }, r));
});
n.defaultProps = {
  isSelected: !1
};
n.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.string, prop_types__WEBPACK_IMPORTED_MODULE_3__.number]).isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
};
n.displayName = "ComboboxOption";



/***/ }),

/***/ 74020:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "II": () => (/* binding */ g),
/* harmony export */   "K7": () => (/* binding */ p),
/* harmony export */   "Zq": () => (/* binding */ $),
/* harmony export */   "d8": () => (/* binding */ c),
/* harmony export */   "fv": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35961);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46273);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71893);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15585);




const c = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k)`
  position: relative;
  border: 1px solid ${({ theme: o, hasError: r }) => r ? o.colors.danger600 : o.colors.neutral200};
  padding-right: ${({ theme: o }) => o.spaces[3]};
  padding-left: ${({ theme: o }) => o.spaces[3]};
  border-radius: ${({ theme: o }) => o.borderRadius};
  background: ${({ theme: o }) => o.colors.neutral0};

  ${({ theme: o, $disabled: r }) => r ? `
    color: ${o.colors.neutral600};
    background: ${o.colors.neutral150};
  ` : void 0}

  ${(0,_themes_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .inputFocusStyle */ .k3)()}
`, p = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 1px 2px;
  grid-area: 1 / 1 / 2 / 3;
`, u = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__/* .Flex */ .k)`
  display: grid;
  flex: 1 1 0%;
  position: relative;
`, g = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input`
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  background: transparent;
  min-height: ${40 / 16}rem;
  border: none;
  flex: 1;
  font-size: ${14 / 16}rem;
  color: ${({ theme: o }) => o.colors.neutral800};
  outline: none;
  &:focus-visible {
    outline: none;
    box-shadow: none;
    outline-offset: 0;
  }
  &[aria-disabled='true'] {
    background: inherit;
    color: inherit;
    cursor: not-allowed;
  }
`, $ = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_Box_Box_js__WEBPACK_IMPORTED_MODULE_3__/* .Box */ .x)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  ${({ isSelected: o, theme: r }) => o && `background: ${r.colors.primary100};`}

  &:hover {
    background: ${({ theme: o }) => o.colors.primary100};
  }
`;



/***/ })

}]);