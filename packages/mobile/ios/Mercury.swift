//
//  Mercury.swift
//  Mercury
//
//  Created by PeaceStar on 2020/06/23.
//

import Foundation

@objc(Mercury)
class Mercury: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return [
      "number": 123.9,
      "string": "foo",
      "boolean": true,
      "array": [1, 22.2, "33"],
      "object": ["a": 1, "b": 2]
    ]
  }
}
