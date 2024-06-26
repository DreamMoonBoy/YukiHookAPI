enableFeaturePreview("TYPESAFE_PROJECT_ACCESSORS")
pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
        mavenCentral()
    }
}
plugins {
    id("com.highcapable.sweetdependency") version "1.0.4"
    id("com.highcapable.sweetproperty") version "1.0.5"
}
sweetProperty {
    global {
        sourcesCode {
            includeKeys("^project\\..*\$".toRegex())
            isEnableRestrictedAccess = true
        }
    }
    rootProject { all { isEnable = false } }
    project(":samples") { all { isEnable = false } }
    project(":samples:demo-app", ":samples:demo-module") { sourcesCode { isEnable = false } }
    project(":yukihookapi-core") { sourcesCode { className = rootProject.name } }
}
rootProject.name = "KYukiHookAPI"
include(":samples:demo-app", ":samples:demo-module")
include(":yukihookapi-core")