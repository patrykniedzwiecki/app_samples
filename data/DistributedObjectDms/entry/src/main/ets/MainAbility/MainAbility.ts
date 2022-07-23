/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Ability from '@ohos.application.Ability'
import Logger from '../data/Logger'

const TAG: string = 'MainAbility'

export default class MainAbility extends Ability {
  onCreate(want, launchParam) {
    Logger.info(TAG, `[Demo] MainAbility onCreate`)
    globalThis.abilityWant = want
    globalThis.abilityContext = this.context
    globalThis.isFA = globalThis.abilityWant.parameters.isFA
    globalThis.deviceId = globalThis.abilityWant.deviceId
  }

  onDestroy() {
    Logger.info(TAG, `[Demo] MainAbility onDestroy`)
  }

  onWindowStageCreate(windowStage) {
    Logger.info(TAG, `[Demo] MainAbility onWindowStageCreate`)
    windowStage.setUIContent(this.context, 'pages/Index', null)
  }

  onWindowStageDestroy() {
    Logger.info(TAG, `[Demo] MainAbility onWindowStageDestroy`)
  }

  onForeground() {
    Logger.info(TAG, `[Demo] MainAbility onForeground`)
  }

  onBackground() {
    Logger.info(TAG, `[Demo] MainAbility onBackground`)
  }
}