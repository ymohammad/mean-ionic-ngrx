/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   14-04-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 05-01-2018
*/

import { ErrorActions, TErrorActions } from '../actions/err.actions';

export interface IErrorState extends String {};
export const intitialState:IErrorState|null = null

/**
 * PATTERN DESIGN:
 * This reducer will check each action type contain word "Error"
 * If finded: update action.type with "ErrorActions.ERROR_SHARED"
 * to meke ErrorEffects working with all features state.
 */
export function reducer (
  state:IErrorState|null = intitialState,
  action:TErrorActions
):IErrorState | null{
  action.type = (action.type.includes('Error'))
    ? ErrorActions.ERROR_SHARED
    : action.type;
  switch (action.type) {
    case ErrorActions.ERROR_SHARED: {
      return Object.assign({},action.payload )
    }

    case ErrorActions.ERROR_DISPLAY_SUCCESS: {
      return intitialState
    }

    default: {
      return <IErrorState>state;
    }
  }
};
