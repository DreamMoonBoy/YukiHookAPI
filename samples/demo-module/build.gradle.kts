plugins {
    autowire(libs.plugins.android.application)
    autowire(libs.plugins.kotlin.android)
    autowire(libs.plugins.kotlin.ksp)
}

android {
    namespace = property.project.samples.demo.module.packageName
    compileSdk = property.project.android.compileSdk

    defaultConfig {
        applicationId = property.project.samples.demo.module.packageName
        minSdk = property.project.android.minSdk
        targetSdk = property.project.android.targetSdk
        versionName = property.project.samples.demo.module.versionName
        versionCode = property.project.samples.demo.module.versionCode
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }
    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_21
        targetCompatibility = JavaVersion.VERSION_21
    }
    kotlinOptions {
        jvmTarget = "21"
        freeCompilerArgs = listOf(
            "-Xno-param-assertions",
            "-Xno-call-assertions",
            "-Xno-receiver-assertions"
        )
    }
    buildFeatures {
        buildConfig = true
        viewBinding = true
    }
    lint { checkReleaseBuilds = false }
    androidResources.additionalParameters += listOf("--allow-reserved-package-id", "--package-id", "0x64")
}

dependencies {
    compileOnly(de.robv.android.xposed.api)
    implementation(projects.yukihookapiCore)
    implementation(io.github.dreammooncai.yukireflection.api.kotlin)
    implementation(com.highcapable.yukihookapi.api)
    ksp(com.highcapable.yukihookapi.ksp.xposed)
    implementation(androidx.preference.preference.ktx)
    implementation(androidx.core.core.ktx)
    implementation(androidx.appcompat.appcompat)
    implementation(androidx.lifecycle.lifecycle.viewmodel.ktx)
    implementation(com.google.android.material.material)
    implementation(androidx.constraintlayout.constraintlayout)
    testImplementation(junit.junit)
    androidTestImplementation(androidx.test.ext.junit)
    androidTestImplementation(androidx.test.espresso.espresso.core)
}