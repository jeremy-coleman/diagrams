import Block from "./Block";

interface IExecutionResult {
  debug: any;
  continue: () => IExecutionResult;
  block: Block;
};

export {IExecutionResult as default, IExecutionResult}