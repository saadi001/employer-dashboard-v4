"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { X as RemoveIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

/**
 * used for identifying the split char and use will pasting
 */
const SPLITTER_REGEX = /[\n#?=&\t,./-]+/;

/**
 * used for formatting the pasted element for the correct value format to be added
 */

const FORMATTING_REGEX = /^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g;

const TagInputContext = React.createContext(null);

export const TagsInput = React.forwardRef(
  (
    {
      children,
      value,
      onValueChange,
      placeholder,
      maxItems,
      minItems,
      className,
      dir,
      ...props
    },
    ref
  ) => {
    const [activeIndex, setActiveIndex] = React.useState(-1);
    const [inputValue, setInputValue] = React.useState("");
    const [disableInput, setDisableInput] = React.useState(false);
    const [disableButton, setDisableButton] = React.useState(false);
    const [isValueSelected, setIsValueSelected] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");

    const parseMinItems = minItems ?? 0;
    const parseMaxItems = maxItems ?? Infinity;

    const onValueChangeHandler = React.useCallback(
      (val) => {
        if (!value.includes(val) && value.length < parseMaxItems) {
          onValueChange([...value, val]);
        }
      },
      [value]
    );

    const RemoveValue = React.useCallback(
      (val) => {
        if (value.includes(val) && value.length > parseMinItems) {
          onValueChange(value.filter((item) => item !== val));
        }
      },
      [value]
    );

    const handlePaste = React.useCallback(
      (e) => {
        e.preventDefault();
        const tags = e.clipboardData.getData("text").split(SPLITTER_REGEX);
        const newValue = [...value];
        tags.forEach((item) => {
          const parsedItem = item.replaceAll(FORMATTING_REGEX, "").trim();
          if (
            parsedItem.length > 0 &&
            !newValue.includes(parsedItem) &&
            newValue.length < parseMaxItems
          ) {
            newValue.push(parsedItem);
          }
        });
        onValueChange(newValue);
        setInputValue("");
      },
      [value]
    );

    const handleSelect = React.useCallback(
      (e) => {
        const target = e.currentTarget;
        const selection = target.value.substring(
          target.selectionStart ?? 0,
          target.selectionEnd ?? 0
        );

        setSelectedValue(selection);
        setIsValueSelected(selection === inputValue);
      },
      [inputValue]
    );

    // ? suggest : a refactor rather then using a useEffect

    React.useEffect(() => {
      const VerifyDisable = () => {
        if (value.length - 1 >= parseMinItems) {
          setDisableButton(false);
        } else {
          setDisableButton(true);
        }
        if (value.length + 1 <= parseMaxItems) {
          setDisableInput(false);
        } else {
          setDisableInput(true);
        }
      };
      VerifyDisable();
    }, [value]);

    // ? check: Under build , default option support
    // * support : for the uncontrolled && controlled ui

    /*  React.useEffect(() => {
    if (!defaultOptions) return;
    onValueChange([...value, ...defaultOptions]);
  }, []); */

    const handleKeyDown = React.useCallback(
      async (e) => {
        e.stopPropagation();

        const moveNext = () => {
          const nextIndex =
            activeIndex + 1 > value.length - 1 ? -1 : activeIndex + 1;
          setActiveIndex(nextIndex);
        };

        const movePrev = () => {
          const prevIndex =
            activeIndex - 1 < 0 ? value.length - 1 : activeIndex - 1;
          setActiveIndex(prevIndex);
        };

        const moveCurrent = () => {
          const newIndex =
            activeIndex - 1 <= 0
              ? value.length - 1 === 0
                ? -1
                : 0
              : activeIndex - 1;
          setActiveIndex(newIndex);
        };
        const target = e.currentTarget;

        // ? Suggest : the multi select should support the same pattern

        switch (e.key) {
          case "ArrowLeft":
            if (dir === "rtl") {
              if (value.length > 0 && activeIndex !== -1) {
                moveNext();
              }
            } else {
              if (value.length > 0 && target.selectionStart === 0) {
                movePrev();
              }
            }
            break;

          case "ArrowRight":
            if (dir === "rtl") {
              if (value.length > 0 && target.selectionStart === 0) {
                movePrev();
              }
            } else {
              if (value.length > 0 && activeIndex !== -1) {
                moveNext();
              }
            }
            break;

          case "Backspace":
          case "Delete":
            if (value.length > 0) {
              if (activeIndex !== -1 && activeIndex < value.length) {
                RemoveValue(value[activeIndex]);
                moveCurrent();
              } else {
                if (target.selectionStart === 0) {
                  if (selectedValue === inputValue || isValueSelected) {
                    RemoveValue(value[value.length - 1]);
                  }
                }
              }
            }
            break;

          case "Escape":
            const newIndex = activeIndex === -1 ? value.length - 1 : -1;
            setActiveIndex(newIndex);
            break;

          case "Enter":
            if (inputValue.trim() !== "") {
              e.preventDefault();
              onValueChangeHandler(inputValue);
              setInputValue("");
            }
            break;
        }
      },
      [activeIndex, value, inputValue, RemoveValue]
    );

    const mousePreventDefault = React.useCallback((e) => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const handleChange = React.useCallback((e) => {
      setInputValue(e.currentTarget.value);
    }, []);

    return (
      <TagInputContext.Provider
        value={{
          value,
          onValueChange,
          inputValue,
          setInputValue,
          activeIndex,
          setActiveIndex,
        }}
      >
        <div
          {...props}
          ref={ref}
          dir={dir}
          className={cn(
            "flex flex-col flex-wrap gap-1 rounded-lg  w-full",
            // {
            //   "focus-within:ring-ring": activeIndex === -1,
            // },
            className
          )}
        >
          <Input
            tabIndex={0}
            aria-label="input tag"
            disabled={disableInput}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            value={inputValue}
            onSelect={handleSelect}
            onChange={activeIndex === -1 ? handleChange : undefined}
            placeholder={placeholder}
            onClick={() => setActiveIndex(-1)}
            className={cn(
              "!px-3 !py-3 !h-auto text-sm  rounded-lg border w-full  text-headerColor ring-0 focus:ring-0 focus:outline-1 hover:border-gray-600 focus:!outline-primaryColor placeholder:font-publicSans placeholder:text-sm",
              activeIndex !== -1 && "caret-transparent"
            )}
          />
          <AnimatePresence>
            <div className="flex items-center flex-wrap gap-2 mt-1">
              {value.map((item, index) => (
                <motion.Badge
                  initial={{ opacity: 0, y: -5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -5, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  tabIndex={activeIndex !== -1 ? 0 : activeIndex}
                  key={item}
                  aria-disabled={disableButton}
                  data-active={activeIndex === index}
                  className={cn(
                    "relative px-1 rounded flex items-center gap-1 data-[active='true']:ring-2 data-[active='true']:ring-muted-foreground truncate aria-disabled:opacity-50 aria-disabled:cursor-not-allowed !bg-primaryBackground"
                  )}
                  variant={"secondary"}
                >
                  <span className="text-sm">{item}</span>
                  <button
                    type="button"
                    aria-label={`Remove ${item} option`}
                    aria-roledescription="button to remove option"
                    disabled={disableButton}
                    onMouseDown={mousePreventDefault}
                    onClick={() => RemoveValue(item)}
                    className="disabled:cursor-not-allowed "
                  >
                    <span className="sr-only">Remove {item} option</span>
                    <RemoveIcon className="h-3 w-3 hover:stroke-destructive" />
                  </button>
                </motion.Badge>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </TagInputContext.Provider>
    );
  }
);

TagsInput.displayName = "TagsInput";
